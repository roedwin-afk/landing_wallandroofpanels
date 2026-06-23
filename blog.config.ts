import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'http://paneldetecho.local/',
  postsPerPage: 5,
  defaultLayout: 'magazine',
  locale: 'en',

  theme: {
    accent: '#97c459',      // verde lima
    background: '#17301e',      // fondo oscuro
    surface: '#17301e',      // cards
    text: '#ffffff',
    muted: 'rgba(255, 255, 255, 0.7)',
    mutedLight: 'rgba(255, 255, 255, 0.5)',
    border: 'rgba(255, 255, 255, 0.1)',
    black: '#0c1a14',      // ← fondo de .blog
    white: '#ffffff',
    fontHeading: '"Barlow Condensed", sans-serif',
    fontBody: '"Barlow", sans-serif',
    fontMono: 'monospace',
    fontDisplay: '"Barlow Condensed", sans-serif',
    containerMax: '1200px',
  },

  hero: {
    tagline: 'Our Blog',
    titleLine1: 'Latest',
    titleLine2: 'Articles',
    description: 'Welcome to our blog.',
  },

  ui: {
  readMoreLabel: 'Read more',
  btnPrev: 'Previous',
  btnNext: 'Next',
  commentButtonColor:     'var(--bk-accent)',
  commentButtonTextColor: 'var(--bk-black)',
  paginationStyle:        'numbered',
  // ── nuevo ──
  paginationBtnBg:         '#97c459',   // verde lima
  paginationBtnText:       '#0c1a14',   // oscuro
  paginationBtnHoverBg:    '#ffffff',
  paginationBtnHoverText:  '#0c1a14',
  paginationActiveBg:      '#97c459',
  paginationActiveText:    '#0c1a14',
},
});
