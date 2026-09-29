/* =====================================================================
   APP — dibuja la página a partir de contenido.js (no hace falta tocarlo)
   ===================================================================== */
(function () {
  var D = window.PORTAFOLIO;
  if (!D) { document.body.innerHTML = '<p style="padding:40px;font-family:sans-serif">No se encontró contenido.js o tiene un error de sintaxis (revisa comas y comillas).</p>'; return; }
  var T = D.textos || {};
  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
  var ICON = {
    mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    in: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4"/></svg>',
    code: '<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg>',
    doc: '<svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',
    tel: '<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>'
  };
  function btn(href, label, icon, primary) {
    var a = el('a', 'btn' + (primary ? ' primary' : ''));
    a.href = href; a.innerHTML = (ICON[icon] || '') + '<span></span>'; a.lastChild.textContent = label;
    if (/^https?:|\.pdf$/.test(href)) { a.target = '_blank'; a.rel = 'noopener'; }
    return a;
  }

  /* ---------- Identidad ---------- */
  document.title = D.nombre + ' — Portfolio';
  if (D.colorAcento) document.documentElement.style.setProperty('--accent', D.colorAcento);
  $('foto').src = D.foto || ''; $('foto').alt = D.nombre;
  $('nombre').textContent = D.nombre; $('rol').textContent = D.rol; $('ubicacion').textContent = D.ubicacion || '';
  $('disponibilidad').textContent = D.disponibilidad || '';

  var C = D.contacto || {}, enl = $('enlaces');
  if (C.cv) enl.appendChild(btn(C.cv, T.descargarCV || 'CV', 'doc', true));
  if (C.linkedin) enl.appendChild(btn(C.linkedin, 'LinkedIn', 'in'));
  if (C.github) enl.appendChild(btn(C.github, 'GitHub', 'code'));

  /* ---------- Índice lateral ---------- */
  var secciones = [['sobre-mi', T.sobreMi], ['proyectos', T.proyectos], ['recorrido', T.experiencia], ['competencias', T.competencias], ['idiomas', T.idiomas], ['contacto', T.contacto]];
  secciones.forEach(function (s) { var a = el('a', null, s[1]); a.href = '#' + s[0]; $('indice').appendChild(a); });
  ['sobreMi', 'proyectos', 'experiencia', 'competencias', 'idiomas', 'contacto'].forEach(function (k) { var e = $('t-' + k); if (e) e.textContent = T[k] || k; });

  /* ---------- Presentación ---------- */
  $('titular').textContent = D.titular || '';
  (D.sobreMi || []).forEach(function (p) { $('sobreMi').appendChild(el('p', null, p)); });
  (D.cifras || []).forEach(function (c) { var f = el('div', 'figure'); f.appendChild(el('b', null, c.valor)); f.appendChild(el('span', null, c.texto)); $('cifras').appendChild(f); });

  /* ---------- Proyectos + filtros ---------- */
  var cards = [];
  (D.proyectos || []).forEach(function (p) {
    var card = el('article', 'card'); card.dataset.cat = p.categoria || '';
    var media = el('div', 'media');
    if (/\.(mp4|webm)$/i.test(p.media || '')) {
      var v = el('video'); v.src = p.media; v.muted = true; v.loop = true; v.playsInline = true; v.setAttribute('preload', 'metadata'); v.setAttribute('aria-label', p.titulo);
      media.appendChild(v);
    } else if (p.media) {
      var img = el('img'); img.src = p.media; img.alt = p.titulo; img.loading = 'lazy'; media.appendChild(img);
    }
    card.appendChild(media);
    var body = el('div', 'body');
    if (p.categoria) body.appendChild(el('span', 'cat', p.categoria));
    body.appendChild(el('h3', null, p.titulo));
    body.appendChild(el('p', null, p.descripcion));
    var tags = el('div', 'tags'); (p.etiquetas || []).forEach(function (t) { tags.appendChild(el('span', 'tag', t)); }); body.appendChild(tags);
    if (p.enlace) { var a = el('a', 'link', (T.verProyecto || 'Voir') + ' →'); a.href = p.enlace; a.target = '_blank'; a.rel = 'noopener'; body.appendChild(a); }
    card.appendChild(body); $('lista-proyectos').appendChild(card); cards.push(card);
  });
  var cats = []; (D.proyectos || []).forEach(function (p) { if (p.categoria && cats.indexOf(p.categoria) < 0) cats.push(p.categoria); });
  if (cats.length > 1) {
    [T.todos || 'Tous'].concat(cats).forEach(function (c, i) {
      var b = el('button', 'chip', c); b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      b.addEventListener('click', function () {
        [].forEach.call($('filtros').children, function (x) { x.setAttribute('aria-selected', 'false'); });
        b.setAttribute('aria-selected', 'true');
        cards.forEach(function (k) { k.hidden = i !== 0 && k.dataset.cat !== c; });
      });
      $('filtros').appendChild(b);
    });
  }
  // Los videos se reproducen solo cuando se ven (y nunca si el usuario pide menos animación)
  var calm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var vids = [].slice.call(document.querySelectorAll('.card video'));
  if (!calm && vids.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var p = e.target.play(); if (p && p.catch) p.catch(function () {}); } else e.target.pause(); }); }, { threshold: .4 });
    vids.forEach(function (v) { io.observe(v); });
  }

  /* ---------- Recorrido ---------- */
  (D.experiencia || []).forEach(function (x) {
    var li = el('li'); li.appendChild(el('div', 'when', x.fecha));
    var d = el('div'); d.appendChild(el('h3', null, x.titulo)); if (x.lugar) d.appendChild(el('div', 'where', x.lugar)); if (x.texto) d.appendChild(el('p', null, x.texto));
    li.appendChild(d); $('experiencia').appendChild(li);
  });

  /* ---------- Competencias e idiomas ---------- */
  (D.competencias || []).forEach(function (g) {
    var s = el('div', 'skill'); s.appendChild(el('h3', null, g.grupo));
    var t = el('div', 'tags'); (g.items || []).forEach(function (i) { t.appendChild(el('span', 'tag', i)); }); s.appendChild(t);
    $('lista-competencias').appendChild(s);
  });
  (D.idiomas || []).forEach(function (l) {
    var c = el('div', 'lang'); c.appendChild(el('b', null, l.idioma)); c.appendChild(el('span', null, l.nivel));
    var dots = el('div', 'dots'); dots.setAttribute('aria-hidden', 'true');
    for (var i = 0; i < 5; i++) dots.appendChild(el('i', i < (l.puntos || 0) ? 'on' : null));
    c.appendChild(dots); $('lista-idiomas').appendChild(c);
  });

  /* ---------- Contacto ---------- */
  $('contactoTitulo').textContent = T.contactoTitulo || ''; $('contactoTexto').textContent = T.contactoTexto || '';
  var row = $('contacto-datos');
  if (C.email) {
    var m = el('span', 'mail', C.email); row.appendChild(m);
    var cp = el('button', 'btn', T.copiar || 'Copier'); cp.type = 'button';
    cp.addEventListener('click', function () {
      var ok = function () { cp.textContent = T.copiado || 'OK'; setTimeout(function () { cp.textContent = T.copiar || 'Copier'; }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(C.email).then(ok, function () { var r = document.createRange(); r.selectNodeContents(m); getSelection().removeAllRanges(); getSelection().addRange(r); ok(); });
    });
    row.appendChild(cp);
    row.appendChild(btn('mailto:' + C.email, 'E-mail', 'mail', true));
  }
  if (C.telefono) row.appendChild(btn('tel:' + C.telefono.replace(/\s/g, ''), C.telefono, 'tel'));
  $('pie').textContent = '© ' + new Date().getFullYear() + ' ' + D.nombre;

  /* ---------- Tema claro / oscuro ---------- */
  var root = document.documentElement, tb = $('tema'), tt = $('temaTxt');
  function actual() { return root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
  function pinta() { tt.textContent = (T.tema || 'Thème') + ' : ' + (actual() === 'dark' ? '☾' : '☀'); }
  tb.addEventListener('click', function () { var n = actual() === 'dark' ? 'light' : 'dark'; root.setAttribute('data-theme', n); try { localStorage.setItem('pf-tema', n); } catch (e) {} pinta(); });
  pinta();

  /* ---------- Resaltar la sección visible en el índice ---------- */
  if ('IntersectionObserver' in window) {
    var links = [].slice.call(document.querySelectorAll('.toc a'));
    var so = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id); }); }); }, { rootMargin: '-40% 0px -55% 0px' });
    secciones.forEach(function (s) { var e = $(s[0]); if (e) so.observe(e); });
  }
})();
