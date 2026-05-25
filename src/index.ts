export interface Env { }

// ─── Language detection ───────────────────────────────────────────────────────

type Lang = 'es' | 'en' | 'de';

// ─── Translations ─────────────────────────────────────────────────────────────

const t: Record<Lang, {
  htmlLang: string;
  title: string;
  metaDescription: string;
  navProjects: string;
  navAbout: string;
  navContact: string;
  heroH1a: string;
  heroH1italic: string;
  heroH1b: string;
  heroBio: string;
  sectionProjects: string;
  // PAU
  pauDesc: string;
  // Pearfect
  pearfectDesc: string;
  // RaidTogether
  raidDesc: string;
  raidPlatform: string;
  // Achievements
  sectionAchievements: string;
  cantabrobotsTitle: string;
  cantabrobotsDesc: string;
  olimpiadasTitle: string;
  olimpiadasDesc: string;
  bitucaTitle: string;
  bitucaDesc: string;
  filosofiaTitle: string;
  filosofiaDesc: string;
  // Skills
  sectionSkills: string;
  skillsDevTitle: string;
  skillsDevDesc: string;
  skillsSecTitle: string;
  skillsSecDesc: string;
  // Contact
  sectionContact: string;
  contactSubtitle: string;
  contactEmail: string;
  // Footer
  footerCopy: string;
  raidLogoAlt: string;
}> = {
  es: {
    htmlLang: 'es',
    title: 'Ángel Peramato Ayala | Desarrollador de Software',
    metaDescription: 'Portfolio de Ángel Peramato Ayala. Estudiante de Ingeniería Informática. Creador de examenesdepau.es, pearfect.net y raidtogether.fun. Especialista en Cloudflare, Next.js, React y ciberseguridad.',
    navProjects: 'Proyectos',
    navAbout: 'Sobre mí',
    navContact: 'Contacto',
    heroH1a: 'Desarrollo de software guiado por la ',
    heroH1italic: 'simplicidad',
    heroH1b: ', el rendimiento y la ciberseguridad.',
    heroBio: 'Hola, soy Ángel. Tengo 18 años y soy estudiante de Ingeniería Informática en la Universidad de Cantabria (UC). Construyo herramientas web eficientes y seguras, principalmente utilizando el ecosistema de Cloudflare, Next.js y React, además de diseñar aplicaciones móviles con Flutter y Firebase.',
    sectionProjects: 'Proyectos',
    pauDesc: 'Plataforma web educativa para estudiantes de bachillerato en España. Permite buscar y descargar exámenes de Selectividad. Desarrollada con Drizzle ORM, cuenta con geolocalización automática por IP para mostrar exámenes de la región del usuario directamente.',
    pearfectDesc: 'Panel premium de administración y gestión de suscripciones SaaS corporativas. Incluye gráficas analíticas en tiempo real (Recharts), un asistente interactivo con IA (Vercel AI SDK) con almacenamiento persistente en AWS S3 y soporte multiidioma.',
    raidDesc: 'Aplicación móvil nativa diseñada para la coordinación en tiempo real de incursiones (raids) en comunidades de Pokémon GO a nivel mundial. Construida para brindar una experiencia ágil y de muy baja latencia.',
    raidPlatform: 'Android App',
    sectionAchievements: 'Logros & Reconocimientos',
    cantabrobotsTitle: 'CANTABROBOTS 2023 & 2024',
    cantabrobotsDesc: 'Ganador del Torneo de Robótica y Automatización de Cantabria en ediciones consecutivas.',
    olimpiadasTitle: 'Olimpiadas de Programación de Cantabria',
    olimpiadasDesc: 'Segundo puesto en las olimpiadas oficiales de programación de la región.',
    bitucaTitle: 'Competición BITUCA 2023',
    bitucaDesc: 'Ganador del certamen de programación de aplicaciones móviles y Python.',
    filosofiaTitle: 'Olimpiada Filosófica de Cantabria 2023',
    filosofiaDesc: 'Ganador del certamen regional de la Olimpiada Filosófica.',
    sectionSkills: 'Habilidades & Especialidad',
    skillsDevTitle: 'Desarrollo e Infraestructura',
    skillsDevDesc: 'Especializado en el desarrollo de arquitecturas web con <strong>Next.js</strong> y <strong>React</strong>. Implemento soluciones eficientes en el ecosistema <strong>Cloudflare Workers / Pages</strong>, utilizando bases de datos D1 SQL y <strong>PostgreSQL</strong>, y reduciendo drásticamente la latencia en el borde mediante técnicas avanzadas de caching. También desarrollo aplicaciones móviles nativas multiplataforma con <strong>Flutter</strong>.',
    skillsSecTitle: 'Ciberseguridad & Bug Bounty',
    skillsSecDesc: 'Cuento con conocimientos de ciberseguridad a nivel medio (aseguramiento de endpoints, análisis de vulnerabilidades y configuración segura de CDN/Firewalls de Cloudflare). Diseño e implemento <strong>flujos seguros de autenticación</strong> y participo en <strong>Bug Bounty</strong>, buscando y reportando vulnerabilidades de forma responsable.',
    sectionContact: 'Contacto',
    contactSubtitle: 'Si tienes un proyecto interesante o estás interesado en trabajar conmigo, puedes escribirme directamente.',
    contactEmail: 'Enviar Email',
    footerCopy: '© 2026 Ángel Peramato.',
    raidLogoAlt: 'Logo de Raid Together',
  },

  en: {
    htmlLang: 'en',
    title: 'Ángel Peramato Ayala | Software Developer',
    metaDescription: 'Portfolio of Ángel Peramato Ayala. Computer Science student. Creator of examenesdepau.es, pearfect.net and raidtogether.fun. Specialist in Cloudflare, Next.js, React and cybersecurity.',
    navProjects: 'Projects',
    navAbout: 'About',
    navContact: 'Contact',
    heroH1a: 'Software development guided by ',
    heroH1italic: 'simplicity',
    heroH1b: ', performance, and cybersecurity.',
    heroBio: 'Hi, I\'m Ángel. I\'m 18 years old and a Computer Science student at the University of Cantabria (UC). I build efficient and secure web tools, mainly using the Cloudflare ecosystem, Next.js and React, as well as designing mobile apps with Flutter and Firebase.',
    sectionProjects: 'Projects',
    pauDesc: 'Educational web platform for high school students in Spain. Allows searching and downloading university entrance exam papers. Built with Drizzle ORM and featuring automatic IP geolocation to show exams from the user\'s region.',
    pearfectDesc: 'Premium SaaS subscription management and analytics dashboard. Includes real-time charts (Recharts), an interactive AI assistant (Vercel AI SDK) with persistent storage on AWS S3, and multi-language support.',
    raidDesc: 'Native mobile app designed for real-time coordination of Pokémon GO raid communities worldwide. Built for an agile, ultra-low latency experience.',
    raidPlatform: 'Android App',
    sectionAchievements: 'Awards & Achievements',
    cantabrobotsTitle: 'CANTABROBOTS 2023 & 2024',
    cantabrobotsDesc: 'Winner of the Cantabria Robotics and Automation Tournament in two consecutive editions.',
    olimpiadasTitle: 'Cantabria Programming Olympiad',
    olimpiadasDesc: 'Second place in the official regional programming competition.',
    bitucaTitle: 'BITUCA 2023 Competition',
    bitucaDesc: 'Winner of the mobile app and Python programming contest.',
    filosofiaTitle: 'Cantabria Philosophy Olympiad 2023',
    filosofiaDesc: 'Winner of the regional Philosophy Olympiad.',
    sectionSkills: 'Skills & Expertise',
    skillsDevTitle: 'Development & Infrastructure',
    skillsDevDesc: 'Specialized in building web architectures with <strong>Next.js</strong> and <strong>React</strong>. I implement efficient solutions within the <strong>Cloudflare Workers / Pages</strong> ecosystem, using D1 SQL and <strong>PostgreSQL</strong> databases, and drastically reducing edge latency through advanced caching techniques. I also develop cross-platform native mobile apps with <strong>Flutter</strong>.',
    skillsSecTitle: 'Cybersecurity & Bug Bounty',
    skillsSecDesc: 'Mid-level cybersecurity knowledge including endpoint hardening, vulnerability analysis, and secure CDN/Firewall configuration via Cloudflare. I design and implement <strong>secure authentication flows</strong> and actively participate in <strong>Bug Bounty</strong> programs, responsibly finding and reporting vulnerabilities.',
    sectionContact: 'Contact',
    contactSubtitle: 'If you have an interesting project or want to work with me, feel free to reach out directly.',
    contactEmail: 'Send Email',
    footerCopy: '© 2026 Ángel Peramato.',
    raidLogoAlt: 'Raid Together Logo',
  },

  de: {
    htmlLang: 'de',
    title: 'Ángel Peramato Ayala | Softwareentwickler',
    metaDescription: 'Portfolio von Ángel Peramato Ayala. Informatikstudent. Entwickler von examenesdepau.es, pearfect.net und raidtogether.fun. Spezialist für Cloudflare, Next.js, React und Cybersicherheit.',
    navProjects: 'Projekte',
    navAbout: 'Über mich',
    navContact: 'Kontakt',
    heroH1a: 'Softwareentwicklung geleitet von ',
    heroH1italic: 'Einfachheit',
    heroH1b: ', Leistung und Cybersicherheit.',
    heroBio: 'Hallo, ich bin Ángel. Ich bin 18 Jahre alt und studiere Informatik an der Universität Kantabrien (UC). Ich entwickle effiziente und sichere Web-Tools, hauptsächlich mit dem Cloudflare-Ökosystem, Next.js und React, sowie mobile Apps mit Flutter und Firebase.',
    sectionProjects: 'Projekte',
    pauDesc: 'Bildungsplattform für Oberstufenschüler in Spanien zum Suchen und Herunterladen von Hochschulzulassungsprüfungen. Mit Drizzle ORM und automatischer IP-Geolokalisierung für regionsspezifische Prüfungen.',
    pearfectDesc: 'Premium-SaaS-Dashboard für Abonnementverwaltung und Unternehmensanalysen. Enthält Echtzeit-Diagramme (Recharts), einen interaktiven KI-Assistenten (Vercel AI SDK) mit persistentem Speicher auf AWS S3 und Mehrsprachigkeit.',
    raidDesc: 'Native mobile App für die Echtzeit-Koordination von Pokémon-GO-Raid-Gemeinschaften weltweit. Entwickelt für eine agile Erfahrung mit sehr geringer Latenz.',
    raidPlatform: 'Android-App',
    sectionAchievements: 'Auszeichnungen & Erfolge',
    cantabrobotsTitle: 'CANTABROBOTS 2023 & 2024',
    cantabrobotsDesc: 'Gewinner des Robotik- und Automatisierungsturniers Kantabriens in zwei aufeinanderfolgenden Editionen.',
    olimpiadasTitle: 'Programmierwettbewerb Kantabrien',
    olimpiadasDesc: 'Zweiter Platz beim offiziellen regionalen Programmier-Olympiad.',
    bitucaTitle: 'BITUCA-Wettbewerb 2023',
    bitucaDesc: 'Gewinner des Wettbewerbs für mobile App- und Python-Programmierung.',
    filosofiaTitle: 'Philosophie-Olympiade Kantabrien 2023',
    filosofiaDesc: 'Gewinner der regionalen Philosophie-Olympiade.',
    sectionSkills: 'Fähigkeiten & Expertise',
    skillsDevTitle: 'Entwicklung & Infrastruktur',
    skillsDevDesc: 'Spezialisiert auf Web-Architekturen mit <strong>Next.js</strong> und <strong>React</strong>. Ich implementiere effiziente Lösungen im <strong>Cloudflare Workers / Pages</strong>-Ökosystem mit D1 SQL und <strong>PostgreSQL</strong> und reduziere die Edge-Latenz durch fortgeschrittenes Caching. Außerdem entwickle ich plattformübergreifende mobile Apps mit <strong>Flutter</strong>.',
    skillsSecTitle: 'Cybersicherheit & Bug Bounty',
    skillsSecDesc: 'Mittlere Kenntnisse in Cybersicherheit: Endpoint-Absicherung, Schwachstellenanalyse und sichere CDN/Firewall-Konfiguration über Cloudflare. Ich entwerfe und implementiere <strong>sichere Authentifizierungsabläufe</strong> und nehme aktiv an <strong>Bug-Bounty</strong>-Programmen teil, um Sicherheitslücken verantwortungsbewusst aufzudecken.',
    sectionContact: 'Kontakt',
    contactSubtitle: 'Wenn Sie ein interessantes Projekt haben oder mit mir zusammenarbeiten möchten, können Sie mich direkt kontaktieren.',
    contactEmail: 'E-Mail senden',
    footerCopy: '© 2026 Ángel Peramato.',
    raidLogoAlt: 'Raid Together Logo',
  },
};

// ─── Worker ───────────────────────────────────────────────────────────────────

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // www → root redirect
    if (url.hostname === 'www.peramato.dev') {
      return Response.redirect('https://peramato.dev' + url.pathname + url.search, 301);
    }

    // 1. Redirect legacy ?lang= params to clean subdirectory paths (SEO preservation)
    const queryLang = url.searchParams.get('lang');
    if (queryLang === 'en') {
      return Response.redirect('https://peramato.dev/en', 301);
    } else if (queryLang === 'de') {
      return Response.redirect('https://peramato.dev/de', 301);
    } else if (queryLang === 'es') {
      return Response.redirect('https://peramato.dev/', 301);
    }

    // 2. Trailing slash normalization for languages
    if (url.pathname === '/en/') {
      return Response.redirect('https://peramato.dev/en', 301);
    } else if (url.pathname === '/de/') {
      return Response.redirect('https://peramato.dev/de', 301);
    } else if (url.pathname === '/es/' || url.pathname === '/es') {
      return Response.redirect('https://peramato.dev/', 301);
    }

    // Route: robots.txt
    if (url.pathname === '/robots.txt') {
      const robots = `User-agent: *
Allow: /

Sitemap: https://peramato.dev/sitemap.xml`;
      return new Response(robots, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
      });
    }

    // Route: sitemap.xml
    if (url.pathname === '/sitemap.xml') {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://peramato.dev/</loc>
    <xhtml:link rel="alternate" hreflang="es" href="https://peramato.dev/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://peramato.dev/en"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://peramato.dev/de"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://peramato.dev/"/>
    <lastmod>2026-05-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://peramato.dev/en</loc>
    <xhtml:link rel="alternate" hreflang="es" href="https://peramato.dev/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://peramato.dev/en"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://peramato.dev/de"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://peramato.dev/"/>
    <lastmod>2026-05-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://peramato.dev/de</loc>
    <xhtml:link rel="alternate" hreflang="es" href="https://peramato.dev/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://peramato.dev/en"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://peramato.dev/de"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://peramato.dev/"/>
    <lastmod>2026-05-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
      return new Response(sitemap, {
        headers: {
          'Content-Type': 'application/xml; charset=utf-8',
          'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
      });
    }

    // Language determination by pathname
    let lang: Lang = 'es';
    let canonicalUrl = 'https://peramato.dev/';

    if (url.pathname === '/') {
      lang = 'es';
      canonicalUrl = 'https://peramato.dev/';
    } else if (url.pathname === '/en') {
      lang = 'en';
      canonicalUrl = 'https://peramato.dev/en';
    } else if (url.pathname === '/de') {
      lang = 'de';
      canonicalUrl = 'https://peramato.dev/de';
    } else {
      // 404 Route handling
      const html404 = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Página no encontrada / Page Not Found</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #fbfbfa;
      color: #191919;
    }
  </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-6 text-center antialiased">
  <h1 class="text-6xl font-light tracking-tight mb-4">404</h1>
  <p class="text-clay-600 text-lg mb-8 font-light max-w-md">La página que buscas no existe. / The page you are looking for does not exist.</p>
  <a href="/" class="px-6 py-2.5 text-sm font-medium text-white bg-[#191919] hover:bg-[#191919]/90 rounded-lg transition-colors">
    Volver al inicio / Go Home
  </a>
</body>
</html>`;
      return new Response(html404, {
        status: 404,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
        },
      });
    }

    const s = t[lang];

    // Lang switcher helpers – keep current path, swap lang param
    const langUrl = (l: Lang) => l === 'es' ? '/' : `/${l}`;

    const html = `<!DOCTYPE html>
<html lang="${s.htmlLang}" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${s.title}</title>
  <meta name="description" content="${s.metaDescription}">
  <meta name="keywords" content="Ángel Peramato, Angel Peramato, Peramato, Ángel Peramato Ayala, Angel Peramato Ayala, desarrollador software, software developer, portfolio, examenesdepau, pearfect, raidtogether">
  <meta http-equiv="content-language" content="${s.htmlLang}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${s.title}">
  <meta property="og:description" content="${s.metaDescription}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="Ángel Peramato Ayala">
  <meta property="og:locale" content="${lang === 'es' ? 'es_ES' : lang === 'de' ? 'de_DE' : 'en_US'}">
  <meta property="og:locale:alternate" content="es_ES">
  <meta property="og:locale:alternate" content="en_US">
  <meta property="og:locale:alternate" content="de_DE">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${s.title}">
  <meta name="twitter:description" content="${s.metaDescription}">

  <!-- Canonical & hreflang -->
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="alternate" hreflang="es" href="https://peramato.dev/">
  <link rel="alternate" hreflang="en" href="https://peramato.dev/en">
  <link rel="alternate" hreflang="de" href="https://peramato.dev/de">
  <link rel="alternate" hreflang="x-default" href="https://peramato.dev/">

  <!-- Identity Verification / Social Links -->
  <link rel="me" href="https://github.com/ebroelevado">
  <link rel="me" href="https://www.linkedin.com/in/peramato/">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ángel Peramato Ayala",
      "alternateName": ["Ángel Peramato", "Angel Peramato", "Peramato", "Ángel Peramato Ayala", "Angel Peramato Ayala"],
      "url": "https://peramato.dev",
      "jobTitle": "Software Developer",
      "knowsAbout": ["Next.js", "React", "Cloudflare Workers", "Cybersecurity", "Flutter", "PostgreSQL", "Drizzle ORM"],
      "sameAs": [
        "https://github.com/ebroelevado",
        "https://www.linkedin.com/in/peramato/"
      ],
      "email": "angel@peramato.dev",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Universidad de Cantabria"
      }
    }
  </script>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ángel Peramato Ayala",
      "url": "https://peramato.dev",
      "inLanguage": ["es", "en", "de"]
    }
  </script>

  <!-- Favicon (SVG inline – Newsreader Latin Extended guaranteed) -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%23191919'/%3E%3Ctext x='50' y='68' font-size='55' font-family='Newsreader, Georgia, serif' font-weight='bold' fill='white' text-anchor='middle'%3E%C3%81%3C/text%3E%3C/svg%3E">

  <!-- Google Fonts: Newsreader (Latin + Latin-ext for Á, accent chars) & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&subset=latin,latin-ext&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Newsreader', 'serif'],
          },
          colors: {
            clay: {
              50: '#fbfbfa',
              100: '#f5f5f3',
              200: '#e5e5e0',
              300: '#d5d5cf',
              600: '#6e6e6a',
              900: '#191919',
            }
          }
        }
      }
    }
  </script>

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    body {
      background-color: #fbfbfa;
      color: #191919;
      font-family: 'Inter', sans-serif;
    }
    ::selection { background: #e5e5e0; color: #191919; }
    .project-card { transition: all 0.3s ease; }
    .project-card:hover { background-color: #f5f5f3; }
    .lang-btn { transition: color 0.15s, border-color 0.15s; }
    .lang-btn.active { color: #191919; border-bottom: 1.5px solid #191919; }
  </style>
</head>
<body class="antialiased min-h-screen flex flex-col selection:bg-clay-200">

  <!-- Header -->
  <header class="w-full border-b border-clay-200 py-6 bg-clay-50 sticky top-0 z-40">
    <div class="max-w-4xl mx-auto px-6 sm:px-12 flex items-center justify-between">
      <a href="/" class="group">
        <span class="font-serif text-xl font-medium tracking-tight text-clay-900">Ángel Peramato</span>
      </a>

      <div class="flex items-center gap-6">
        <nav class="hidden sm:flex items-center gap-6 text-sm text-clay-600">
          <a href="#proyectos" class="hover:text-clay-900 transition-colors">${s.navProjects}</a>
          <a href="#sobre-mi" class="hover:text-clay-900 transition-colors">${s.navAbout}</a>
          <a href="#contacto" class="hover:text-clay-900 transition-colors">${s.navContact}</a>
        </nav>

        <!-- Language switcher -->
        <div class="flex items-center gap-2 text-xs font-mono text-clay-600 border-l border-clay-200 pl-4 ml-2">
          <a href="${langUrl('es')}" class="lang-btn pb-px ${lang === 'es' ? 'active' : 'hover:text-clay-900'}">ES</a>
          <span class="text-clay-300">·</span>
          <a href="${langUrl('en')}" class="lang-btn pb-px ${lang === 'en' ? 'active' : 'hover:text-clay-900'}">EN</a>
          <span class="text-clay-300">·</span>
          <a href="${langUrl('de')}" class="lang-btn pb-px ${lang === 'de' ? 'active' : 'hover:text-clay-900'}">DE</a>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <main class="flex-grow max-w-4xl w-full mx-auto px-6 sm:px-12 py-16 sm:py-24 space-y-24">

    <!-- Hero / Intro -->
    <section class="space-y-6">
      <h1 class="font-serif text-4xl sm:text-6xl text-clay-900 tracking-tight leading-none font-light">
        ${s.heroH1a}<span class="italic font-normal">${s.heroH1italic}</span>${s.heroH1b}
      </h1>

      <p class="text-clay-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
        ${s.heroBio}
      </p>

      <div class="flex items-center gap-4 pt-2">
        <a href="https://github.com/ebroelevado" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-sm font-medium text-clay-900 border-b border-clay-900 pb-0.5 hover:opacity-75 transition-opacity">
          GitHub <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 ml-1"></i>
        </a>
        <a href="https://www.linkedin.com/in/peramato/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-sm font-medium text-clay-900 border-b border-clay-900 pb-0.5 hover:opacity-75 transition-opacity">
          LinkedIn <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 ml-1"></i>
        </a>
        <a href="mailto:angel@peramato.dev" class="inline-flex items-center text-sm font-medium text-clay-600 hover:text-clay-900 transition-colors">
          angel@peramato.dev
        </a>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="proyectos" class="space-y-8">
      <div class="border-b border-clay-200 pb-4">
        <h2 class="font-serif text-2xl font-normal text-clay-900">${s.sectionProjects}</h2>
      </div>

      <div class="divide-y divide-clay-200">

        <!-- Project 1: examenesdepau.es -->
        <article class="project-card py-8 flex flex-col md:flex-row gap-6 items-center rounded-xl px-4 -mx-4 transition-colors">
          <div class="flex-grow space-y-4">
            <h3 class="font-serif text-xl font-medium text-clay-900">
              <a href="https://examenesdepau.es" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-center gap-1.5">
                Exámenes de PAU <i data-lucide="arrow-up-right" class="w-4 h-4 text-clay-600"></i>
              </a>
            </h3>
            <p class="text-clay-600 text-sm font-light leading-relaxed">${s.pauDesc}</p>
            <div class="flex flex-wrap gap-2 text-xs font-mono text-clay-600">
              <span>Next.js 16</span><span>•</span><span>Drizzle ORM</span><span>•</span>
              <span>Cloudflare Workers</span><span>•</span><span>D1 SQL</span><span>•</span>
              <span>Edge Caching</span>
            </div>
          </div>
          <a href="https://examenesdepau.es" target="_blank" rel="noopener noreferrer" class="w-16 h-16 flex-shrink-0 border border-clay-200 rounded-lg bg-clay-900 flex items-center justify-center hover:scale-105 transition-transform duration-200">
            <span class="font-serif text-white text-2xl font-bold tracking-tight leading-none">PAU</span>
          </a>
        </article>

        <!-- Project 2: pearfect.net -->
        <article class="project-card py-8 flex flex-col md:flex-row gap-6 items-center rounded-xl px-4 -mx-4 transition-colors">
          <div class="flex-grow space-y-4">
            <h3 class="font-serif text-xl font-medium text-clay-900">
              <a href="https://pearfect.net" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-center gap-1.5">
                Pearfect Dashboard <i data-lucide="arrow-up-right" class="w-4 h-4 text-clay-600"></i>
              </a>
            </h3>
            <p class="text-clay-600 text-sm font-light leading-relaxed">${s.pearfectDesc}</p>
            <div class="flex flex-wrap gap-2 text-xs font-mono text-clay-600">
              <span>Next.js 16</span><span>•</span><span>React 19</span><span>•</span>
              <span>Prisma ORM</span><span>•</span><span>PostgreSQL</span><span>•</span>
              <span>AWS S3</span>
            </div>
          </div>
          <a href="https://pearfect.net" target="_blank" rel="noopener noreferrer" class="w-16 h-16 flex-shrink-0 border border-clay-200 rounded-lg bg-clay-900 flex items-center justify-center hover:scale-105 transition-transform duration-200">
            <svg viewBox="-2.5 0 48 48" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <g class="stroke-white"><line x1="16" y1="12" x2="16" y2="36"></line><path d="M16 12 H26 C31 12 31 22 26 22 H16"></path></g>
              <line x1="19" y1="27" x2="33" y2="27" stroke-width="2.2" class="stroke-zinc-500"></line>
              <line x1="19" y1="31.5" x2="29" y2="31.5" stroke-width="2.2" class="stroke-zinc-400"></line>
              <line x1="19" y1="36" x2="25" y2="36" stroke-width="2.2" class="stroke-zinc-300"></line>
            </svg>
          </a>
        </article>

        <!-- Project 3: raidtogether.fun -->
        <article class="project-card py-8 flex flex-col md:flex-row gap-6 items-center rounded-xl px-4 -mx-4 transition-colors">
          <div class="flex-grow space-y-4">
            <h3 class="font-serif text-xl font-medium text-clay-900">
              <a href="https://raidtogether.fun" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-center gap-1.5">
                Raid Together <i data-lucide="arrow-up-right" class="w-4 h-4 text-clay-600"></i>
              </a>
            </h3>
            <p class="text-clay-600 text-sm font-light leading-relaxed">${s.raidDesc}</p>
            <div class="flex flex-wrap gap-2 text-xs font-mono text-clay-600">
              <span>Flutter</span><span>•</span><span>Firebase</span><span>•</span>
              <span>${s.raidPlatform}</span>
            </div>
          </div>
          <a href="https://raidtogether.fun" target="_blank" rel="noopener noreferrer" class="w-16 h-16 flex-shrink-0 border border-clay-200 rounded-lg bg-clay-900 flex items-center justify-center hover:scale-105 transition-transform duration-200">
            <img src="https://image.raidtogether.fun/images/screenshots/logo.webp?v=2" alt="${s.raidLogoAlt}" class="h-10 object-contain brightness-0 invert">
          </a>
        </article>

      </div>
    </section>

    <!-- Logros & Reconocimientos -->
    <section id="logros" class="space-y-8">
      <div class="border-b border-clay-200 pb-4">
        <h2 class="font-serif text-2xl font-normal text-clay-900">${s.sectionAchievements}</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-light leading-relaxed text-clay-600">
        <div class="space-y-1">
          <h3 class="font-serif text-base font-medium text-clay-900">${s.cantabrobotsTitle}</h3>
          <p class="text-clay-600 font-light">${s.cantabrobotsDesc}</p>
        </div>
        <div class="space-y-1">
          <h3 class="font-serif text-base font-medium text-clay-900">${s.olimpiadasTitle}</h3>
          <p class="text-clay-600 font-light">${s.olimpiadasDesc}</p>
        </div>
        <div class="space-y-1">
          <h3 class="font-serif text-base font-medium text-clay-900">${s.bitucaTitle}</h3>
          <p class="text-clay-600 font-light">${s.bitucaDesc}</p>
        </div>
        <div class="space-y-1">
          <h3 class="font-serif text-base font-medium text-clay-900">${s.filosofiaTitle}</h3>
          <p class="text-clay-600 font-light">${s.filosofiaDesc}</p>
        </div>
      </div>
    </section>

    <!-- Tech Stack / Skills -->
    <section id="sobre-mi" class="space-y-8">
      <div class="border-b border-clay-200 pb-4">
        <h2 class="font-serif text-2xl font-normal text-clay-900">${s.sectionSkills}</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-light leading-relaxed text-clay-600">
        <div class="space-y-4">
          <h3 class="font-serif text-lg font-medium text-clay-900">${s.skillsDevTitle}</h3>
          <p>${s.skillsDevDesc}</p>
        </div>
        <div class="space-y-4">
          <h3 class="font-serif text-lg font-medium text-clay-900">${s.skillsSecTitle}</h3>
          <p>${s.skillsSecDesc}</p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contacto" class="border-t border-clay-200 pt-16 space-y-6 text-center">
      <h2 class="font-serif text-3xl text-clay-900">${s.sectionContact}</h2>
      <p class="text-clay-600 text-sm font-light max-w-md mx-auto">${s.contactSubtitle}</p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
        <a href="mailto:angel@peramato.dev" class="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-clay-900 hover:bg-clay-900/90 rounded-lg transition-colors">
          <i data-lucide="mail" class="w-4 h-4 mr-2"></i> ${s.contactEmail}
        </a>
        <a href="https://github.com/ebroelevado" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-sm font-medium text-clay-900 border-b border-clay-900 pb-0.5 hover:opacity-75 transition-opacity">
          GitHub <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 ml-1"></i>
        </a>
        <a href="https://www.linkedin.com/in/peramato/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-sm font-medium text-clay-900 border-b border-clay-900 pb-0.5 hover:opacity-75 transition-opacity">
          LinkedIn <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 ml-1"></i>
        </a>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="w-full border-t border-clay-200 py-8 px-6 sm:px-12 bg-clay-100 text-center text-xs text-clay-600">
    <div class="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>${s.footerCopy}</p>
      <div class="flex gap-4">
        <a href="https://examenesdepau.es" target="_blank" rel="noopener noreferrer" class="hover:underline">examenesdepau.es</a>
        <a href="https://pearfect.net" target="_blank" rel="noopener noreferrer" class="hover:underline">pearfect.net</a>
        <a href="https://raidtogether.fun" target="_blank" rel="noopener noreferrer" class="hover:underline">raidtogether.fun</a>
      </div>
    </div>
  </footer>

  <!-- Initialize Lucide Icons -->
  <script>lucide.createIcons();</script>
</body>
</html>`;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
        'Vary': 'Accept-Language',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Content-Language': lang,
      },
    });
  },
};
