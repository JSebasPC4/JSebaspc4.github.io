# Plantilla de portafolio — guía rápida

Una página web personal para mostrar tus proyectos a reclutadores. **No hay que instalar nada**: solo se edita un archivo de texto.

```
Plantilla_Portafolio/
├── index.html      ← la página (no hace falta tocarla)
├── contenido.js    ← ✏️ TODO TU CONTENIDO VA AQUÍ
├── estilos.css     ← colores y diseño (opcional)
├── app.js          ← dibuja la página (no tocar)
└── assets/         ← tus fotos, videos y tu CV
```

---

## 1. Ver la página
Haz doble clic en `index.html`: se abre en el navegador. Cada vez que guardes cambios, recarga con **F5**.

## 2. Poner tu contenido (15–30 min)
Abre `contenido.js` con cualquier editor (VS Code, Bloc de notas…) y reemplaza los textos entre comillas:
- `nombre`, `rol`, `ubicacion`, `disponibilidad` (la etiqueta verde; déjala vacía `""` para ocultarla).
- `contacto`: correo, LinkedIn, GitHub y la ruta de tu CV. Lo que dejes vacío no aparece.
- `titular` y `sobreMi`: una frase fuerte y 2 párrafos cortos.
- `cifras`: 0 a 4 datos que te destaquen (ranking, número de proyectos, idiomas…).
- `proyectos`: copia un bloque `{ ... },` por proyecto. **La `categoria` crea los filtros automáticamente** (usa pocas: 3–5).
- `experiencia`, `competencias`, `idiomas` (`puntos` de 0 a 5 para la barra).
- `textos`: las etiquetas de la interfaz. Vienen en francés; cámbialas si quieres otro idioma.

⚠️ Si la página sale en blanco, casi siempre es una **coma o comilla faltante** en `contenido.js`. Abre la consola del navegador (F12) y te dice la línea.

## 3. Tus fotos, videos y CV
- Copia tus archivos en `assets/` y escribe la ruta en `contenido.js`, por ejemplo `"assets/mi-robot.jpg"`.
- **Foto de perfil**: cuadrada, unos 600×600 px.
- **Imágenes de proyectos**: horizontales, en proporción 16:10 (por ejemplo 1200×750). Así todas las tarjetas quedan iguales.
- **Videos**: clips cortos de 6–10 s, sin sonido y de menos de 3 MB; se reproducen solos cuando aparecen en pantalla. Para comprimirlos con [ffmpeg](https://ffmpeg.org):
  ```
  ffmpeg -ss 0 -t 8 -i video_original.mp4 -vf "scale=960:-2,fps=30" -c:v libx264 -crf 27 -an -movflags +faststart assets/mi-clip.mp4
  ```
- **CV**: guárdalo como `assets/CV.pdf` (o cambia la ruta en `contacto.cv`).

## 4. Cambiar el color
En `contenido.js` pon por ejemplo `colorAcento: "#2563EB"`. Si prefieres, edita `--accent` en `estilos.css`. El modo oscuro se adapta solo.

## 5. Publicarla gratis en internet (GitHub Pages)
1. Crea una cuenta en github.com.
2. Crea un repositorio **público** llamado exactamente `TU-USUARIO.github.io`.
3. Pulsa *Add file → Upload files* y arrastra **todo el contenido** de esta carpeta (no la carpeta en sí).
4. Pulsa *Commit changes*. En 1–2 minutos tu página estará en `https://TU-USUARIO.github.io`.
5. Pon ese enlace en tu CV, en LinkedIn y en tus correos de candidatura.

## 6. Consejos para que funcione con reclutadores
- **Muestra resultados**: "R² = 0,94", "20 cajas/min", "−28 % de consumo" dicen más que "hice un proyecto de control".
- **Un video vale más que diez líneas**: aunque sea un clip de 8 segundos del prototipo funcionando.
- **Personalízala**: cambia el color, el titular y el orden de las secciones. Una página que se nota copiada da mala impresión.
- Revisa la ortografía: si es en francés, pásala por un corrector o pide a alguien que la lea.

---
*Plantilla libre para uso personal (licencia MIT). Compartida por Nicolás Plata Molano.*
