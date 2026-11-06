/* ==========================================================================
   MAITU CO., LIMITED — Global Site Script (reuse rule B)
   The only JavaScript file on the site. Every page loads it with:
     <script src="js/main.js" defer></script>

   Responsibilities
   A  Shared header injection
   B  Shared footer injection (company info + legal links + year)
   C  SEO configuration + JSON-LD Organization
   D  IntersectionObserver reveal / stagger
   E  SVG sprite loading + mascot resolution
   F  Navigation, smooth scroll, back-to-top, news filter, form validation
   G  Active navigation state by pathname
   ========================================================================== */
(function () {
  'use strict';

  /* ========================================================================
     0. SITE FACTS — single source of truth
     ======================================================================== */
  var SITE = {
    name: 'Maitu Co., Limited',
    short: 'Maitu',
    website: 'mengtuyx.com',
    url: 'https://mengtuyx.com',
    address: 'ROOM C19 12/F, TUNGTEX BUILDING, NO. 203 WAI YIP STREET, KWUN TONG, HONG KONG',
    emailSupport: 'support@mengtuyx.com',
    emailAccount: 'laiheng@mengtuyx.com',
    scope: 'Cross-border business advisory, logistics supporting consultation, brand planning, general trading and e-commerce consultation.',
    services: [
      'Cross-border business advisory',
      'Logistics supporting consultation',
      'Brand planning',
      'General trading',
      'E-commerce consultation',
      'Import and export coordination',
      'Supply chain operations support',
      'Market and investment planning'
    ],
    nav: [
      { href: './', label: 'Home', page: 'home' },
      { href: 'services.html', label: 'Services', page: 'services' },
      { href: 'culture.html', label: 'Culture', page: 'culture' },
      { href: 'news.html', label: 'News', page: 'news' },
      { href: 'contact.html', label: 'Contact', page: 'contact' }
    ]
  };

  /* ========================================================================
     1. SEO CONFIG — applied on DOMContentLoaded (reuse rule F)
     ======================================================================== */
  var SEO = {
    '/': {
      title: 'Maitu Co., Limited — Cross-border Business Advisory, Trade & Mobile Operations',
      description: 'Maitu Co., Limited delivers cross-border business advisory, logistics supporting consultation, brand planning, general trading and e-commerce consultation — with a mobile management app for Google Play and the Apple App Store.',
      canonical: 'https://mengtuyx.com/',
      og: {
        type: 'website',
        title: 'Maitu Co., Limited — Cross-border Business Advisory & Trade',
        description: 'Advisory, logistics, brand planning, general trading and e-commerce consultation, unified in one mobile management platform.',
        image: 'https://mengtuyx.com/images/hero.png',
        locale: 'en_US',
        siteName: 'Maitu Co., Limited'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Maitu Co., Limited — Cross-border Business Advisory & Trade',
        description: 'Advisory, logistics, brand planning, general trading and e-commerce consultation in one mobile management platform.',
        image: 'https://mengtuyx.com/images/hero.png'
      }
    },
    '/services.html': {
      title: 'Services — Cross-border Advisory, Logistics, Brand & Trading | Maitu Co., Limited',
      description: 'Eight integrated business lines and the Maitu mobile management app for Google Play and the Apple App Store: advisory, logistics consulting, brand planning, general trading and e-commerce consultation.',
      canonical: 'https://mengtuyx.com/services.html',
      og: {
        type: 'website',
        title: 'Services — Maitu Co., Limited',
        description: 'Eight integrated business lines plus the Maitu mobile management app for Google Play and the Apple App Store.',
        image: 'https://mengtuyx.com/images/hero.png',
        locale: 'en_US',
        siteName: 'Maitu Co., Limited'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Services — Maitu Co., Limited',
        description: 'Eight integrated business lines plus the Maitu mobile management app.',
        image: 'https://mengtuyx.com/images/hero.png'
      }
    },
    '/culture.html': {
      title: 'Culture & Milestones — Maitu Co., Limited',
      description: 'The mission, vision and values behind Maitu Co., Limited, our milestones from Hong Kong, and our approach to compliance, CSR and global trade ethics.',
      canonical: 'https://mengtuyx.com/culture.html',
      og: {
        type: 'website',
        title: 'Culture & Milestones — Maitu Co., Limited',
        description: 'Mission, vision, values and milestones of Maitu Co., Limited, a Hong Kong cross-border business company.',
        image: 'https://mengtuyx.com/images/hero.png',
        locale: 'en_US',
        siteName: 'Maitu Co., Limited'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Culture & Milestones — Maitu Co., Limited',
        description: 'Mission, vision, values and milestones of Maitu Co., Limited.',
        image: 'https://mengtuyx.com/images/hero.png'
      }
    },
    '/news.html': {
      title: 'Newsroom — Trade Insights, App Releases & Company News | Maitu Co., Limited',
      description: 'Trade insights, supply chain analysis, brand planning notes and Maitu mobile app release updates from the Maitu Co., Limited newsroom.',
      canonical: 'https://mengtuyx.com/news.html',
      og: {
        type: 'website',
        title: 'Newsroom — Maitu Co., Limited',
        description: 'Trade insights, supply chain analysis and Maitu mobile app release updates.',
        image: 'https://mengtuyx.com/images/news-1.png',
        locale: 'en_US',
        siteName: 'Maitu Co., Limited'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Newsroom — Maitu Co., Limited',
        description: 'Trade insights, supply chain analysis and Mavit app release updates.',
        image: 'https://mengtuyx.com/images/news-1.png'
      }
    },
    '/contact.html': {
      title: 'Contact Maitu Co., Limited — Kwun Tong, Hong Kong',
      description: 'Reach Maitu Co., Limited for cross-border business advisory, logistics supporting consultation, brand planning, general trading and e-commerce consultation. Office in Kwun Tong, Hong Kong.',
      canonical: 'https://mengtuyx.com/contact.html',
      og: {
        type: 'website',
        title: 'Contact — Maitu Co., Limited',
        description: 'Talk to Maitu Co., Limited about cross-border advisory, logistics, brand planning, trading and e-commerce.',
        image: 'https://mengtuyx.com/images/hero.png',
        locale: 'en_US',
        siteName: 'Maitu Co., Limited'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Contact — Maitu Co., Limited',
        description: 'Talk to Maitu Co., Limited about cross-border advisory, logistics, brand planning, trading and e-commerce.',
        image: 'https://mengtuyx.com/images/hero.png'
      }
    },
    '/privacy.html': {
      title: 'Privacy Policy — Maitu Co., Limited',
      description: 'How Maitu Co., Limited collects, uses, shares and protects personal data across our website and mobile apps for Google Play and the Apple App Store, including regional privacy rights.',
      canonical: 'https://mengtuyx.com/privacy.html',
      og: {
        type: 'article',
        title: 'Privacy Policy — Maitu Co., Limited',
        description: 'Data collection, legal bases, advertising partners, retention, security and regional privacy rights.',
        image: 'https://mengtuyx.com/images/hero.png',
        locale: 'en_US',
        siteName: 'Maitu Co., Limited'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Privacy Policy — Maitu Co., Limited',
        description: 'Data collection, legal bases, advertising partners, retention, security and regional privacy rights.',
        image: 'https://mengtuyx.com/images/hero.png'
      }
    },
    '/terms.html': {
      title: 'Terms of Service — Maitu Co., Limited',
      description: 'Terms governing access to the Maitu Co., Limited website and mobile management apps for Google Play and the Apple App Store, including licensing, payment, advertising and Hong Kong governing law.',
      canonical: 'https://mengtuyx.com/terms.html',
      og: {
        type: 'article',
        title: 'Terms of Service — Maitu Co., Limited',
        description: 'Licensing, acceptable use, payment, advertising, third-party services and Hong Kong governing law.',
        image: 'https://mengtuyx.com/images/hero.png',
        locale: 'en_US',
        siteName: 'Maitu Co., Limited'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Terms of Service — Maitu Co., Limited',
        description: 'Licensing, acceptable use, payment, advertising, third-party services and Hong Kong governing law.',
        image: 'https://mengtuyx.com/images/hero.png'
      }
    }
  };

  /* ========================================================================
     2. SMALL HELPERS
     ======================================================================== */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (html != null) { node.innerHTML = html; }
    return node;
  }

  function icon(id, className) {
    return '<svg class="icon ' + (className || '') + '" aria-hidden="true"><use href="#' + id + '"></use></svg>';
  }

  function mascot(id, variant) {
    return '<span class="mascot ' + (variant || '') + '" data-mascot="' + id + '"></span>';
  }

  function currentPath() {
    var p = window.location.pathname || '/';
    if (p.charAt(p.length - 1) === '/' && p.length > 1) { p = p.replace(/\/+$/, '') + '/index.html'; }
    if (!/\.html$/i.test(p)) { p += 'index.html'; }
    return p;
  }

  function isReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* ========================================================================
     3. SVG SPRITE (reuse rule E) — load once, then resolve mascots
     ======================================================================== */
  var spriteReady = false;

  /* Mirror of images/sprite.svg — the file stays the canonical source, but a
     file:// preview cannot fetch a local file, so this copy keeps the mascots
     and icons rendering when the site is opened straight from disk.
     Keep in sync with images/sprite.svg. */
  var SPRITE_FALLBACK = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="position:absolute;width:0;height:0;overflow:hidden"><symbol id="logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="12" cy="12" r="9.2"/>\n    <path d="M7.6 15.6 12 7.4l4.4 8.2"/>\n    <path d="M9.9 15.6 12 11.5l2.1 4.1"/>\n  </symbol>\n<symbol id="menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M4 7h16M4 12h16M4 17h16"/>\n  </symbol>\n<symbol id="close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="m6 6 12 12M18 6 6 18"/>\n  </symbol>\n<symbol id="arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M4.5 12h14M13 6.5 18.5 12 13 17.5"/>\n  </symbol>\n<symbol id="arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M12 19.5v-15M6 11l6-6 6 6"/>\n  </symbol>\n<symbol id="mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <rect x="3" y="5" width="18" height="14" rx="2.2"/>\n    <path d="m3.6 6.8 8.4 6 8.4-6"/>\n  </symbol>\n<symbol id="phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M7 3.5h2.6l1.4 3.5-2 1.4a10.8 10.8 0 0 0 5 5l1.4-2 3.5 1.4V16a2 2 0 0 1-2.2 2A16.4 16.4 0 0 1 5 5.7 2 2 0 0 1 7 3.5Z"/>\n  </symbol>\n<symbol id="map-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M12 21.2s6.6-5.9 6.6-10.4a6.6 6.6 0 1 0-13.2 0C5.4 15.3 12 21.2 12 21.2Z"/>\n    <circle cx="12" cy="10.6" r="2.5"/>\n  </symbol>\n<symbol id="globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="12" cy="12" r="9"/>\n    <path d="M3.2 12h17.6"/>\n    <path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"/>\n  </symbol>\n<symbol id="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M4 4v16h16"/>\n    <path d="M8 16v-5M12 16V7.5M16 16v-8"/>\n  </symbol>\n<symbol id="cart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M3 4h2.2l2.2 10.4a1.9 1.9 0 0 0 1.9 1.5h7.8a1.9 1.9 0 0 0 1.8-1.4L20.6 8H6.1"/>\n    <circle cx="10" cy="19.6" r="1.3"/>\n    <circle cx="17" cy="19.6" r="1.3"/>\n  </symbol>\n<symbol id="truck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M2.5 6.5h10.2v9.6H2.5z"/>\n    <path d="M12.7 10.2h4.1l3.2 3.1v2.8h-7.3z"/>\n    <circle cx="6.8" cy="18" r="1.7"/>\n    <circle cx="16.6" cy="18" r="1.7"/>\n  </symbol>\n<symbol id="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M12 3.2 19 5.8v5.5c0 4.3-2.9 7.8-7 9.5-4.1-1.7-7-5.2-7-9.5V5.8L12 3.2Z"/>\n    <path d="m9.2 12.1 2 2 3.6-3.8"/>\n  </symbol>\n<symbol id="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.8L12 3.6Z"/>\n  </symbol>\n<symbol id="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">\n    <path d="m5 12.6 4.6 4.6L19 7.6"/>\n  </symbol>\n<symbol id="play" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="12" cy="12" r="9"/>\n    <path d="M10.2 8.4 16 12l-5.8 3.6V8.4Z"/>\n  </symbol>\n<symbol id="download" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M12 3.5v11.8M7.2 11l4.8 4.8L16.8 11"/>\n    <path d="M4 19.5h16"/>\n  </symbol>\n<symbol id="apple" viewBox="0 0 24 24" fill="currentColor">\n    <path d="M16.4 12.6c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.6 2.1-1.5 2.7-.4 6.6 1.1 8.8.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7 1.3 0 1.7.7 2.8.7 1.2 0 1.9-1.1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.5-.1 0-2.2-.9-2.2-3.4ZM14.2 6.1c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2.1-.5 2.8-1.3Z"/>\n  </symbol>\n<symbol id="google-play" viewBox="0 0 24 24" fill="currentColor">\n    <path d="M3.6 2.5c-.3.3-.5.8-.5 1.4v16.2c0 .6.2 1.1.5 1.4l.1.1 9.1-9.1v-.2L3.7 2.4l-.1.1Z"/>\n    <path d="m15.6 15.2-3-3v-.2l3-3 .1.1 3.6 2.5c1 .7 1 1.8 0 2.5l-3.6 2.5-.1.1Z"/>\n    <path d="m15.7 15.1-3.1-3.1L3.6 21c.4.4 1 .5 1.8.1l10.3-5.9Z"/>\n    <path d="M15.7 8.9 5.4 3c-.8-.4-1.4-.4-1.8 0l9 8.9 3.1-3Z"/>\n  </symbol>\n<symbol id="mobile-app" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <rect x="6.5" y="2.8" width="11" height="18.4" rx="2.4"/>\n    <path d="M10.6 5.6h2.8"/>\n    <path d="M10.8 18.4h2.4"/>\n    <path d="m9.4 12.4 1.7 1.7 3.4-3.6"/>\n  </symbol>\n<symbol id="settings" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="12" cy="12" r="3.1"/>\n    <path d="M19.4 14.4a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.5a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.6V2.5a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6 1h.2a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1Z"/>\n  </symbol>\n<symbol id="users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M15.6 20v-1.8a3.6 3.6 0 0 0-3.6-3.6H6.4a3.6 3.6 0 0 0-3.6 3.6V20"/>\n    <circle cx="9.2" cy="7.6" r="3.6"/>\n    <path d="M21.2 20v-1.8a3.6 3.6 0 0 0-2.7-3.5M15.6 4.2a3.6 3.6 0 0 1 0 6.9"/>\n  </symbol>\n<symbol id="briefcase" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <rect x="2.8" y="7.2" width="18.4" height="13" rx="2.2"/>\n    <path d="M8.6 7.2V5.4a1.8 1.8 0 0 1 1.8-1.8h3.2a1.8 1.8 0 0 1 1.8 1.8v1.8"/>\n    <path d="M2.8 12.6h18.4"/>\n    <path d="M10.6 12.6h2.8"/>\n  </symbol>\n<symbol id="layers" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="m12 3 9 5-9 5-9-5 9-5Z"/>\n    <path d="m3.4 12.4 8.6 4.8 8.6-4.8"/>\n    <path d="m3.4 16.6 8.6 4.8 8.6-4.8"/>\n  </symbol>\n<symbol id="cat" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M19.5 21.5 18 9.5l11.5 7.2"/>\n    <path d="M44.5 21.5 46 9.5 34.5 16.7"/>\n    <path d="M32 15.4c-9.7 0-17.6 7.7-17.6 17.3 0 9.6 7.9 17.4 17.6 17.4s17.6-7.8 17.6-17.4c0-9.6-7.9-17.3-17.6-17.3Z"/>\n    <circle cx="25.3" cy="31" r="2.1" fill="currentColor" stroke="none"/>\n    <circle cx="38.7" cy="31" r="2.1" fill="currentColor" stroke="none"/>\n    <path d="M32 37.4 29 40.2h6L32 37.4Z"/>\n    <path d="M28.4 44.2c2.1 1.9 5.1 1.9 7.2 0"/>\n    <path d="M11 30.5h6M11 36.5h6M47 30.5h6M47 36.5h6"/>\n  </symbol>\n<symbol id="dog" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M20.5 17.5c-5.4 1.4-8.6 7.4-8 13.4.4 3.6 2.6 6.4 5.4 7.6"/>\n    <path d="M43.5 17.5c5.4 1.4 8.6 7.4 8 13.4-.4 3.6-2.6 6.4-5.4 7.6"/>\n    <path d="M32 16.5c-9.8 0-17.8 8-17.8 17.9 0 9.9 8 17.1 17.8 17.1s17.8-7.2 17.8-17.1c0-9.9-8-17.9-17.8-17.9Z"/>\n    <circle cx="25.2" cy="31.5" r="2.2" fill="currentColor" stroke="none"/>\n    <circle cx="38.8" cy="31.5" r="2.2" fill="currentColor" stroke="none"/>\n    <path d="M32 38.5c-2 0-3.6 1.4-3.6 3s1.6 3 3.6 3 3.6-1.4 3.6-3-1.6-3-3.6-3Z"/>\n    <path d="M32 44.5v2.4M28.2 47.8c1.1 2 2.2 2.8 3.8 2.8s2.7-.8 3.8-2.8"/>\n  </symbol>\n<symbol id="fox" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M14 8.5 17 25l12.5-7.5"/>\n    <path d="M50 8.5 47 25l-12.5-7.5"/>\n    <path d="M32 15.5 17 25 20 47c1 6.5 6 9.5 12 9.5s11-3 12-9.5l3-22-15-9.5Z"/>\n    <circle cx="25.4" cy="31" r="2.2" fill="currentColor" stroke="none"/>\n    <circle cx="38.6" cy="31" r="2.2" fill="currentColor" stroke="none"/>\n    <path d="M32 37.5 28.6 41h6.8L32 37.5Z"/>\n    <path d="M27 46.5c2.8 2 7.2 2 10 0"/>\n  </symbol>\n<symbol id="panda" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="17.5" cy="16.5" r="6.5"/>\n    <circle cx="46.5" cy="16.5" r="6.5"/>\n    <path d="M32 13.5c-10.5 0-19 8.2-19 18.3 0 10.1 8.5 18.7 19 18.7s19-8.6 19-18.7c0-10.1-8.5-18.3-19-18.3Z"/>\n    <ellipse cx="24.4" cy="30.5" rx="5" ry="6" transform="rotate(-16 24.4 30.5)"/>\n    <ellipse cx="39.6" cy="30.5" rx="5" ry="6" transform="rotate(16 39.6 30.5)"/>\n    <circle cx="24.8" cy="30.6" r="2.1" fill="currentColor" stroke="none"/>\n    <circle cx="39.2" cy="30.6" r="2.1" fill="currentColor" stroke="none"/>\n    <path d="M32 38.5 29 41.4h6L32 38.5Z"/>\n    <path d="M27 45.5c2.8 2.2 7.2 2.2 10 0"/>\n  </symbol>\n<symbol id="rabbit" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M24 24.5C20 18 19 10.5 21.5 6.5c2.4-3.8 6-2 6.8 2 .8 4-1 9.5-2 16"/>\n    <path d="M40 24.5c4-6.5 5-14 2.5-18-2.4-3.8-6-2-6.8 2-.8 4 1 9.5 2 16"/>\n    <path d="M32 22.5c-9.8 0-17.6 7.8-17.6 17.4C14.4 49.5 22.3 57 32 57s17.6-7.5 17.6-17.1c0-9.6-7.8-17.4-17.6-17.4Z"/>\n    <circle cx="25.3" cy="37" r="2.2" fill="currentColor" stroke="none"/>\n    <circle cx="38.7" cy="37" r="2.2" fill="currentColor" stroke="none"/>\n    <path d="M32 43 29.2 46h5.6L32 43Z"/>\n    <path d="M28.4 49.5c2.1 1.9 5.1 1.9 7.2 0"/>\n  </symbol>\n<symbol id="bear" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="18.5" cy="17.5" r="7"/>\n    <circle cx="45.5" cy="17.5" r="7"/>\n    <path d="M32 14.5c-10.2 0-18.5 8.3-18.5 18.5S21.8 51.5 32 51.5 50.5 43.2 50.5 33 42.2 14.5 32 14.5Z"/>\n    <ellipse cx="32" cy="40" rx="9.5" ry="7.5"/>\n    <circle cx="25.6" cy="30" r="2.2" fill="currentColor" stroke="none"/>\n    <circle cx="38.4" cy="30" r="2.2" fill="currentColor" stroke="none"/>\n    <path d="M32 34.5 28.8 38h6.4L32 34.5Z"/>\n    <path d="M32 38v3.2M26.5 40.6c.6 1.6 2.4 2.6 5.5 2.6s4.9-1 5.5-2.6"/>\n  </symbol>\n<symbol id="owl" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M13.5 22 10 11l9.5 5.5M50.5 22 54 11l-9.5 5.5"/>\n    <path d="M32 12c-11 0-19 8-19 18.5 0 11.5 8.5 21.5 19 21.5s19-10 19-21.5C51 20 43 12 32 12Z"/>\n    <circle cx="24" cy="27" r="6.5"/>\n    <circle cx="40" cy="27" r="6.5"/>\n    <circle cx="24" cy="27" r="2.4" fill="currentColor" stroke="none"/>\n    <circle cx="40" cy="27" r="2.4" fill="currentColor" stroke="none"/>\n    <path d="M32 32.5 28.5 38h7L32 32.5Z"/>\n    <path d="M22 47c3 2.5 6.5 3.5 10 3.5s7-1 10-3.5"/>\n  </symbol>\n<symbol id="penguin" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M32 8c-10.4 0-17.6 9.3-17.6 21.5 0 13.6 8 25.5 17.6 25.5s17.6-11.9 17.6-25.5C49.6 17.3 42.4 8 32 8Z"/>\n    <path d="M32 23c-6 0-10.4 6.3-10.4 13.6 0 8.7 4.8 15.9 10.4 15.9s10.4-7.2 10.4-15.9C42.4 29.3 38 23 32 23Z"/>\n    <circle cx="25.6" cy="20.5" r="2" fill="currentColor" stroke="none"/>\n    <circle cx="38.4" cy="20.5" r="2" fill="currentColor" stroke="none"/>\n    <path d="M32 24.5 28.4 28h7.2L32 24.5Z"/>\n    <path d="M24 55.5 19 60M40 55.5 45 60"/>\n  </symbol>\n<symbol id="smile" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="32" cy="32" r="21"/>\n    <circle cx="24.5" cy="26" r="2.4" fill="currentColor" stroke="none"/>\n    <circle cx="39.5" cy="26" r="2.4" fill="currentColor" stroke="none"/>\n    <path d="M22 37c3.2 4.4 6.6 6.4 10 6.4s6.8-2 10-6.4"/>\n  </symbol>\n<symbol id="heart-eyes" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="32" cy="32" r="21"/>\n    <path d="M18.5 22.5c-3 0-4.8 2.3-4.8 4.7 0 4 4.8 8.3 4.8 8.3s4.8-4.3 4.8-8.3c0-2.4-1.8-4.7-4.8-4.7Z"/>\n    <path d="M45.5 22.5c-3 0-4.8 2.3-4.8 4.7 0 4 4.8 8.3 4.8 8.3s4.8-4.3 4.8-8.3c0-2.4-1.8-4.7-4.8-4.7Z"/>\n    <path d="M23 43c3 3.4 5.8 5 9 5s6-1.6 9-5"/>\n  </symbol>\n<symbol id="wink" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="32" cy="32" r="21"/>\n    <path d="M20 25.5c1.8-1.8 4.4-1.8 6.2 0"/>\n    <circle cx="40.5" cy="26" r="2.4" fill="currentColor" stroke="none"/>\n    <path d="M22 38c3.4 4.6 7 6.8 10 6.8s6.6-2.2 10-6.8"/>\n  </symbol>\n<symbol id="thumbs-up" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M10 30h8v22h-8z"/>\n    <path d="M18 30l9.5-17c1.4-2.4 4.9-1.8 5.6.9l2.3 9.1h9.4c3 0 5.3 2.6 4.9 5.6l-3 18.2a6 6 0 0 1-5.9 5.1H18"/>\n    <path d="M27 38h11"/>\n  </symbol>\n<symbol id="party" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M20 26 32 6l12 20"/>\n    <path d="M26.5 20.5 32 12l5.5 8.5"/>\n    <circle cx="32" cy="40" r="16"/>\n    <circle cx="26.5" cy="37" r="2.2" fill="currentColor" stroke="none"/>\n    <circle cx="37.5" cy="37" r="2.2" fill="currentColor" stroke="none"/>\n    <path d="M25.5 44c2.4 3 4.4 4.2 6.5 4.2s4.1-1.2 6.5-4.2"/>\n    <path d="M49 14v6M46 17h6M12 34v5M9.5 36.5h5"/>\n  </symbol>\n<symbol id="rocket-cat" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M32 4c7 5.5 10.5 12.5 10.5 20 0 3-.5 5.8-1.4 8.3H22.9c-.9-2.5-1.4-5.3-1.4-8.3C21.5 16.5 25 9.5 32 4Z"/>\n    <circle cx="32" cy="24" r="8"/>\n    <path d="M26.5 18 25 11l6 4.5M37.5 18 39 11l-6 4.5"/>\n    <circle cx="28.8" cy="24" r="1.8" fill="currentColor" stroke="none"/>\n    <circle cx="35.2" cy="24" r="1.8" fill="currentColor" stroke="none"/>\n    <path d="M30 29h4"/>\n    <path d="M22.9 32.3 16 38v9l6.9-3.4M41.1 32.3 48 38v9l-6.9-3.4"/>\n    <path d="M26 42c1.8 4 3.6 6 6 6s4.2-2 6-6"/>\n    <circle cx="55" cy="14" r="2"/>\n    <path d="M8 18v4M6 20h4M50 50v4M48 52h4"/>\n  </symbol></svg>';

  function loadSprite() {
    return fetch('images/sprite.svg', { credentials: 'omit' })
      .then(function (res) {
        if (!res.ok) { throw new Error('sprite ' + res.status); }
        return res.text();
      })
      .then(function (text) {
        var host = el('div', 'sprite-host');
        host.setAttribute('aria-hidden', 'true');
        host.innerHTML = text;
        document.body.insertBefore(host, document.body.firstChild);
        spriteReady = true;
        resolveMascots();
      })
      .catch(function () {
        // file:// (opened straight from disk) blocks fetching local files.
        // Inject the embedded mirror instead so icons and mascots still render.
        var host = el('div', 'sprite-host');
        host.setAttribute('aria-hidden', 'true');
        host.innerHTML = SPRITE_FALLBACK;
        document.body.insertBefore(host, document.body.firstChild);
        spriteReady = true;
        resolveMascots();
      });
  }

  function resolveMascots() {
    if (!spriteReady) { return; }
    $$('[data-mascot]').forEach(function (node) {
      var id = node.getAttribute('data-mascot');
      if (!id || node.getAttribute('data-mascot-resolved') === '1') { return; }
      node.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#' + id + '"></use></svg>';
      node.setAttribute('data-mascot-resolved', '1');
    });
  }

  /* ========================================================================
     4. HEADER (reuse rule C)
     ======================================================================== */
  function buildHeader() {
    var host = $('#site-header');
    if (!host) { return; }

    var links = SITE.nav.map(function (item) {
      return '<a class="nav__link" href="' + item.href + '" data-nav-page="' + item.page + '">' + item.label + '</a>';
    }).join('');

    var drawerLinks = SITE.nav.map(function (item) {
      return '<a class="nav-drawer__link" href="' + item.href + '" data-nav-page="' + item.page + '">' +
             item.label + icon('arrow-right') + '</a>';
    }).join('');

    host.className = 'site-header site-header--dark';
    host.innerHTML =
      '<div class="container site-header__inner">' +
        '<a class="brand" href="./" aria-label="' + SITE.name + ' home">' +
          '<span class="brand__mark" data-logo>' + icon('logo') + '</span>' +
          '<span class="brand__name">' + SITE.short +
            '<span class="brand__suffix">Co., Limited</span>' +
          '</span>' +
        '</a>' +
        '<nav class="nav" aria-label="Primary">' + links + '</nav>' +
        '<div class="site-header__actions">' +
          '<a class="btn btn--ghost-light btn--sm" href="contact.html">Talk to us</a>' +
          '<button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-drawer">' +
            icon('menu', 'icon--menu') +
          '</button>' +
        '</div>' +
      '</div>' +
      '<div class="nav-drawer" id="nav-drawer" aria-hidden="true">' +
        '<div class="container">' +
          drawerLinks +
          '<div class="nav-drawer__meta">' +
            '<a href="mailto:' + SITE.emailSupport + '">' + icon('mail') + SITE.emailSupport + '</a>' +
            '<a href="' + SITE.website + '" target="_blank" rel="noopener">' + icon('globe') + SITE.website + '</a>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* ========================================================================
     5. FOOTER (reuse rule D)
     ======================================================================== */
  function buildFooter() {
    var host = $('#site-footer');
    if (!host) { return; }

    var year = new Date().getFullYear();

    host.className = 'site-footer';
    host.innerHTML =
      '<div class="container">' +
        '<div class="site-footer__grid">' +
          '<div class="site-footer__brand">' +
            '<a class="brand" href="./" aria-label="' + SITE.name + ' home">' +
              '<span class="brand__mark" data-logo>' + icon('logo') + '</span>' +
              '<span class="brand__name">' + SITE.short +
                '<span class="brand__suffix">Co., Limited</span>' +
              '</span>' +
            '</a>' +
            '<p>' + SITE.scope + ' One operating platform, delivered from Hong Kong to clients worldwide.</p>' +
            '<div class="site-footer__mascots">' +
              mascot('cat', 'mascot--sm mascot--ink') +
              mascot('fox', 'mascot--sm mascot--ink') +
              mascot('panda', 'mascot--sm mascot--ink') +
            '</div>' +
          '</div>' +
          '<div>' +
            '<h4 class="site-footer__col-title">Services</h4>' +
            '<ul class="site-footer__list">' +
              SITE.services.slice(0, 5).map(function (s) {
                return '<li><a href="services.html">' + s + '</a></li>';
              }).join('') +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4 class="site-footer__col-title">Company</h4>' +
            '<ul class="site-footer__list">' +
              '<li><a href="./">Home</a></li>' +
              '<li><a href="services.html">Services</a></li>' +
              '<li><a href="culture.html">Culture</a></li>' +
              '<li><a href="news.html">News</a></li>' +
              '<li><a href="contact.html">Contact</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4 class="site-footer__col-title">Contact</h4>' +
            '<div class="site-footer__contact">' +
              '<div class="site-footer__contact-item">' + icon('map-pin') +
                '<span>' + SITE.address + '</span>' +
              '</div>' +
              '<div class="site-footer__contact-item">' + icon('mail') +
                '<a href="mailto:' + SITE.emailSupport + '">' + SITE.emailSupport + '</a>' +
              '</div>' +
              '<div class="site-footer__contact-item">' + icon('users') +
                '<a href="mailto:' + SITE.emailAccount + '">' + SITE.emailAccount + '</a>' +
              '</div>' +
              '<div class="site-footer__contact-item">' + icon('globe') +
                '<a href="https://' + SITE.website + '" target="_blank" rel="noopener">' + SITE.website + '</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="site-footer__legal">' +
          '<span>&copy; ' + year + ' ' + SITE.name + '. All rights reserved. Company No. registered in Hong Kong.</span>' +
          '<div class="site-footer__legal-links">' +
            '<a href="privacy.html">Privacy Policy</a>' +
            '<a href="terms.html">Terms of Service</a>' +
            '<a href="sitemap.xml">Sitemap</a>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* ========================================================================
     6. SEO + JSON-LD (reuse rule F)
     ======================================================================== */
  function applySEO() {
    var path = currentPath();
    var cfg = SEO[path] || SEO['/'];
    if (!cfg) { return; }

    function setMeta(attr, key, value) {
      var node = document.head.querySelector('meta[' + attr + '="' + key + '"]');
      if (!node) {
        node = document.createElement('meta');
        node.setAttribute(attr, key);
        document.head.appendChild(node);
      }
      node.setAttribute('content', value);
    }

    document.title = cfg.title;

    var desc = document.head.querySelector('meta[name="description"]');
    if (desc) { desc.setAttribute('content', cfg.description); }
    setMeta('name', 'description', cfg.description);

    var canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) { canonical.setAttribute('href', cfg.canonical); }

    setMeta('property', 'og:type', cfg.og.type);
    setMeta('property', 'og:title', cfg.og.title);
    setMeta('property', 'og:description', cfg.og.description);
    setMeta('property', 'og:url', cfg.canonical);
    setMeta('property', 'og:image', cfg.og.image);
    setMeta('property', 'og:site_name', cfg.og.siteName);
    setMeta('property', 'og:locale', cfg.og.locale);

    setMeta('name', 'twitter:card', cfg.twitter.card);
    setMeta('name', 'twitter:title', cfg.twitter.title);
    setMeta('name', 'twitter:description', cfg.twitter.description);
    setMeta('name', 'twitter:image', cfg.twitter.image);

    var ld = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url + '/',
      email: SITE.emailSupport,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Room C19, 12/F, Tungtex Building, No. 203 Wai Yip Street',
        addressLocality: 'Kwun Tong',
        addressRegion: 'Hong Kong',
        addressCountry: 'HK'
      },
      sameAs: ['https://' + SITE.website],
      description: SITE.scope
    };

    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);
  }

  /* ========================================================================
     7. ACTIVE NAVIGATION (rule G)
     ======================================================================== */
  function markActiveNav() {
    var path = currentPath();
    var page = path === '/index.html' ? 'home' : path.replace(/^\//, '').replace(/\.html$/, '');
    $$('[data-nav-page]').forEach(function (link) {
      if (link.getAttribute('data-nav-page') === page) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ========================================================================
     8. HOME LINK — file:// vs http://
     ======================================================================== */
  function homeHref() {
    // Under file:// a "./" href resolves to the FOLDER URI, so the browser
    // renders the OS directory index instead of the homepage. Over HTTP the
    // server maps "/" to index.html, which keeps the public URL free of an
    // index.html token.
    return window.location.protocol === 'file:' ? './index.html' : './';
  }

  function applyHomeHref() {
    var href = homeHref();
    $$('a[href="./"]').forEach(function (a) { a.setAttribute('href', href); });
  }

  /* ========================================================================
     9. NAVIGATION BEHAVIOUR
     ======================================================================== */
  function initNav() {
    var toggle = $('.nav-toggle');
    var drawer = $('#nav-drawer');

    if (toggle && drawer) {
      toggle.addEventListener('click', function () {
        var open = drawer.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
        document.body.classList.toggle('is-locked', open);
        var use = toggle.querySelector('use');
        if (use) { use.setAttribute('href', open ? '#close' : '#menu'); }
      });

      $$('.nav-drawer__link').forEach(function (link) {
        link.addEventListener('click', function () {
          drawer.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', 'Open menu');
          drawer.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('is-locked');
          var use = toggle.querySelector('use');
          if (use) { use.setAttribute('href', '#menu'); }
        });
      });
    }

    var header = $('#site-header');
    var toTop = $('.to-top');

    function onScroll() {
      var y = window.pageYOffset || document.documentElement.scrollTop;
      if (header) { header.classList.toggle('is-stuck', y > 40); }
      if (toTop) { toTop.classList.toggle('is-visible', y > 640); }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (toTop) {
      toTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: isReducedMotion() ? 'auto' : 'smooth' });
      });
    }

    // Smooth in-page anchors with header offset
    $$('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        if (!id || id === '#') { return; }
        var target = document.querySelector(id);
        if (!target) { return; }
        e.preventDefault();
        var offset = (header ? header.offsetHeight : 0) + 20;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: isReducedMotion() ? 'auto' : 'smooth' });
      });
    });
  }

  /* ========================================================================
     9. REVEAL OBSERVER + COUNTERS (reuse rule G)
     ======================================================================== */
  function initReveal() {
    var items = $$('.reveal, .fade-up, .fade-in, .slide-left, .slide-right, .zoom-in, .stagger');

    if (!items.length) { return; }

    if (isReducedMotion() || !('IntersectionObserver' in window)) {
      items.forEach(function (node) { node.classList.add('in'); });
      $$('[data-count]').forEach(function (node) { node.textContent = node.getAttribute('data-count'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        var node = entry.target;
        node.classList.add('in');
        if (node.classList.contains('stagger')) {
          Array.prototype.forEach.call(node.children, function (child, i) {
            child.style.setProperty('--i', i);
          });
        }
        countUp(node);
        observer.unobserve(node);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    items.forEach(function (node) { observer.observe(node); });
  }

  function countUp(scope) {
    var targets = [];
    if (scope.hasAttribute && scope.hasAttribute('data-count')) { targets.push(scope); }
    $$('[data-count]', scope).forEach(function (n) { targets.push(n); });

    targets.forEach(function (node) {
      var target = parseFloat(node.getAttribute('data-count'));
      if (isNaN(target)) { return; }
      var suffix = node.getAttribute('data-suffix') || '';
      var duration = 1200;
      var start = null;

      function step(ts) {
        if (start === null) { start = ts; }
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.round(target * eased) + suffix;
        if (p < 1) { window.requestAnimationFrame(step); }
      }
      window.requestAnimationFrame(step);
    });
  }

  /* ========================================================================
     10. NEWS FILTER + PAGINATION
     ======================================================================== */
  function initNews() {
    var buttons = $$('[data-filter]');
    var cards = $$('[data-category]');
    if (!buttons.length || !cards.length) { return; }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');
        buttons.forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        var shown = 0;
        cards.forEach(function (card) {
          var cat = card.getAttribute('data-category');
          var match = filter === 'all' || cat === filter;
          card.classList.toggle('is-hidden', !match);
          if (match) { shown++; }
        });
        var empty = $('[data-news-empty]');
        if (empty) { empty.classList.toggle('is-hidden', shown !== 0); }
      });
    });

    var pages = $$('[data-page-btn]');
    if (pages.length) {
      pages.forEach(function (btn) {
        btn.addEventListener('click', function () {
          pages.forEach(function (b) {
            b.classList.toggle('is-active', b === btn);
            b.setAttribute('aria-current', b === btn ? 'page' : 'false');
          });
        });
      });
    }
  }

  /* ========================================================================
     11. CONTACT FORM VALIDATION
     ======================================================================== */
  function initForm() {
    var form = $('[data-form]');
    if (!form) { return; }

    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function setError(field, message) {
      var wrap = field.closest('.field') || field.parentNode;
      if (!wrap) { return; }
      wrap.classList.add('has-error');
      var box = wrap.querySelector('.field__error');
      if (box) { box.textContent = message; }
      field.setAttribute('aria-invalid', 'true');
    }

    function clearError(field) {
      var wrap = field.closest('.field') || field.parentNode;
      if (!wrap) { return; }
      wrap.classList.remove('has-error');
      var box = wrap.querySelector('.field__error');
      if (box) { box.textContent = ''; }
      field.removeAttribute('aria-invalid');
    }

    $$('input, textarea', form).forEach(function (field) {
      field.addEventListener('blur', function () {
        if (field.type === 'checkbox' || !field.value.trim()) { return; }
        if (field.type === 'email' && !emailRe.test(field.value.trim())) {
          setError(field, 'Please enter a valid email address.');
        } else {
          clearError(field);
        }
      });
      field.addEventListener('input', function () { clearError(field); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      var firstBad = null;

      $$('[required]', form).forEach(function (field) {
        if (field.type === 'checkbox') {
          if (!field.checked) {
            valid = false;
            if (!firstBad) { firstBad = field; }
            var wrap = field.closest('.checkbox');
            if (wrap) { wrap.classList.add('has-error'); }
          }
          return;
        }
        var value = field.value.trim();
        if (!value) {
          valid = false;
          if (!firstBad) { firstBad = field; }
          setError(field, 'This field is required.');
        } else if (field.type === 'email' && !emailRe.test(value)) {
          valid = false;
          if (!firstBad) { firstBad = field; }
          setError(field, 'Please enter a valid email address.');
        } else {
          clearError(field);
        }
      });

      var status = $('[data-form-status]');

      if (!valid) {
        if (status) {
          status.textContent = 'Please correct the highlighted fields and try again.';
          status.classList.add('is-visible');
        }
        if (firstBad && firstBad.focus) { firstBad.focus(); }
        return;
      }

      var name = (form.querySelector('[name="name"]') || {}).value || 'there';
      if (status) {
        status.textContent = 'Thank you, ' + name.trim() + '. Your message has been queued and our business support team will reply within one business day.';
        status.classList.add('is-visible');
      }
      form.reset();
    });
  }

  /* ========================================================================
     12. BACK TO TOP — injected once, never repeated per page
     ======================================================================== */
  function buildToTop() {
    if ($('.to-top')) { return; }
    var btn = el('button', 'to-top');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = icon('arrow-up');
    document.body.appendChild(btn);
  }

  /* ========================================================================
     13. BOOT
     ======================================================================== */
  function boot() {
    buildHeader();
    buildFooter();
    buildToTop();
    applyHomeHref();
    applySEO();
    markActiveNav();
    initNav();
    initReveal();
    initNews();
    initForm();

    // Sprite resolves after the shell is in place so every <use> resolves.
    loadSprite();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
