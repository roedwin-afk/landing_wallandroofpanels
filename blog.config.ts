import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'http://paneldetecho.local/',
  postsPerPage: 7,
  defaultLayout: 'featured',
  locale: 'en',

  theme: {
    accent: '#97c459',     // Verde claro vibrante (--green-light) para elementos destacados
    background: '#f4f4f2', // Fondo claro definido directamente en el body
    surface: '#ffffff',    // Blanco puro para las tarjetas y paneles de contenido (--white)
    text: '#1a1a1a',       // Gris muy oscuro definido para el texto en el body
    muted: '#17301e',      // Verde medio para descripciones y extractos (--green-mid)
    mutedLight: '#3b6d11', // Verde principal para metadatos y etiquetas secundarias (--green-primary)
    border: '#eaf3de',     // Verde pálido muy suave para los bordes y separadores (--green-pale)
    black: '#0c1a14',      // Verde oscuro profundo para títulos destacados (--green-dark)
    white: '#ffffff',
    fontHeading: '"Barlow Condensed", sans-serif', // Fuente condensada de títulos (--font-display)
    fontBody: '"Barlow", sans-serif',             // Fuente base del cuerpo (--font-body)
    fontMono: 'monospace',
    fontDisplay: '"Barlow Condensed", sans-serif',
    containerMax: '1200px',
  },

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    en: {
      tagline: 'Our Blog',
      titleLine1: 'Latest',
      titleLine2: 'Articles',
      description: 'Welcome to our blog.',
    },
    es: {
      tagline: 'Nuestro Blog',
      titleLine1: 'Últimos',
      titleLine2: 'Artículos',
      description: 'Bienvenido a nuestro blog.',
    },
  },

  // ── UI labels ────────────────────────────────────────────────
  ui: {
    en: {
      readMoreLabel: 'Read more →',
      btnPrev: 'Previous',
      btnNext: 'Next',
      commentButtonColor: 'var(--bk-accent)',
      commentButtonTextColor: 'var(--bk-black)',
      paginationStyle: 'minimal',
      // Paginación personalizada que integra la paleta de verdes
      paginationBtnBg: '#ffffff',          // Fondo de los botones en blanco
      paginationBtnText: '#3b6d11',        // Texto en verde principal (--green-primary)
      paginationBtnHoverBg: '#3b6d11',     // Fondo en hover con el verde principal
      paginationBtnHoverText: '#ffffff',   // Texto blanco en hover
      paginationActiveBg: '#97c459',       // Botón activo con el verde brillante de acento (--green-light)
      paginationActiveText: '#0c1a14',     // Texto oscuro para mantener excelente contraste
    },
    es: {
      readMoreLabel: 'Leer más →',
      btnPrev: 'Anterior',
      btnNext: 'Siguiente',
    },
  },
});