# Drylic® — Landing Page

> React + Tailwind CSS · Production-ready · Framer-compatible

## Stack

- **React 18** — componentes funcionales con hooks
- **Tailwind CSS 3** — con design tokens de la marca
- **Vite** — build rápido y HMR

## Estructura

```
drylic/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx               # Nav fija con blur
        ├── Hero.jsx                 # Hero de dos columnas
        ├── CelestialIllustration.jsx # SVG animada — luna + estrellas + nubes
        ├── EmailSignup.jsx          # Form con validación y feedback
        ├── Benefits.jsx             # Sección de 4 beneficios con scroll reveal
        └── Footer.jsx               # Footer minimal con social links
```

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

## Build de producción

```bash
npm run build
npm run preview
```

## Design tokens (tailwind.config.js)

| Token                    | Valor     | Uso                         |
|--------------------------|-----------|-----------------------------|
| `drylic-ice`             | `#DCEEFF` | Fondo de iconos, auras      |
| `drylic-sky`             | `#EAF4FF` | Gradientes suaves           |
| `drylic-frost`           | `#F8FBFF` | Background general          |
| `drylic-slate`           | `#7D8A97` | Textos secundarios          |
| `drylic-navy`            | `#274C77` | Color principal, titulares  |
| `drylic-navy-deep`       | `#1d3a5c` | Hover de botones            |

## Tipografía

- **Cormorant Garamond** — titulares, logo, serif editorial
- **DM Sans** — cuerpo, navegación, formularios

## Notas de Framer

Para importar en Framer:
1. Copia los componentes individualmente como Code Components
2. Reemplaza las clases Tailwind con estilos inline o CSS Modules
3. La ilustración celestial (`CelestialIllustration.jsx`) es 100% SVG — compatible directamente

---

© 2025 Drylic®. Todos los derechos reservados.
