export interface Env {}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const html = `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Peramato | Portfolio - Desarrollador de Software</title>
  <meta name="description" content="Portfolio profesional de Peramato. Creador de examenesdepau.es, pearfect.net y raidtogether.fun. Especializado en Next.js, React, Cloudflare Workers y bases de datos escalables.">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="https://examenesdepau.es/favicon.jpg">
  
  <!-- Google Fonts: Outfit & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Outfit', 'sans-serif'],
          },
          colors: {
            brand: {
              50: '#f5f3ff',
              100: '#ede9fe',
              500: '#8b5cf6',
              600: '#7c3aed',
              700: '#6d28d9',
              900: '#4c1d95',
              950: '#0c0a0f',
            }
          }
        }
      }
    }
  </script>

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    /* Custom Styles & Glassmorphism */
    body {
      background-color: #050409;
      color: #f3f4f6;
    }

    .glass {
      background: rgba(15, 12, 25, 0.55);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .glass-hover:hover {
      background: rgba(20, 16, 35, 0.7);
      border-color: rgba(139, 92, 246, 0.35);
      box-shadow: 0 10px 30px -10px rgba(139, 92, 246, 0.2);
    }

    /* Mesh Gradients */
    .glow-blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.15;
      z-index: 0;
      pointer-events: none;
      animation: pulse 12s infinite alternate;
    }

    @keyframes pulse {
      0% { transform: scale(1) translate(0, 0); }
      50% { transform: scale(1.1) translate(5%, 5%); }
      100% { transform: scale(0.9) translate(-5%, -5%); }
    }

    /* Card glow animation */
    .project-card {
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .project-card:hover {
      transform: translateY(-6px);
    }

    /* Selection styling */
    ::selection {
      background: rgba(139, 92, 246, 0.3);
      color: #fff;
    }
  </style>
</head>
<body class="font-sans antialiased overflow-x-hidden">

  <!-- Glowing background blobs -->
  <div class="glow-blob bg-brand-500 w-[500px] h-[500px] top-[-100px] left-[-100px]"></div>
  <div class="glow-blob bg-teal-500 w-[400px] h-[400px] top-[30%] right-[-50px]" style="animation-delay: 2s;"></div>
  <div class="glow-blob bg-indigo-500 w-[600px] h-[600px] bottom-[-200px] left-[10%]" style="animation-delay: 4s;"></div>

  <!-- Header / Nav -->
  <header class="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 transition-all duration-300">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#" class="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-white flex items-center gap-1.5">
        peramato<span class="text-brand-500">.dev</span>
      </a>
      
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#proyectos" class="hover:text-white transition-colors">Proyectos</a>
        <a href="#habilidades" class="hover:text-white transition-colors">Tecnologías</a>
        <a href="#contacto" class="hover:text-white transition-colors">Contacto</a>
      </nav>

      <div class="flex items-center gap-4">
        <a href="https://github.com/ebroelevado" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 hover:text-white transition-all">
          <i data-lucide="github" class="w-5 h-5"></i>
        </a>
        <a href="#contacto" class="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-brand-600 rounded-lg hover:bg-brand-500 transition-all border border-brand-500/20 shadow-lg shadow-brand-600/10">
          Trabajemos juntos
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-16">
    <div class="max-w-4xl mx-auto text-center z-10">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-100 text-xs font-semibold mb-6 animate-pulse">
        <span class="w-2 h-2 rounded-full bg-brand-500"></span> Disponible para nuevos proyectos
      </div>
      
      <h1 class="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight mb-6 leading-tight">
        Diseño soluciones web<br>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 via-indigo-400 to-teal-400">
          rápidas y escalables
        </span>
      </h1>
      
      <p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
        Ingeniero de Software especializado en crear productos web interactivos y eficientes en el ecosistema de <strong class="text-white font-medium">Cloudflare, Next.js y React</strong>. Creador y optimizador de plataformas con miles de usuarios activos.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#proyectos" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-500 transition-all border border-brand-500/20 shadow-xl shadow-brand-600/20">
          Ver Proyectos <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
        </a>
        <a href="#contacto" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-gray-300 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:text-white transition-all">
          Contactar
        </a>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="proyectos" class="relative max-w-6xl mx-auto px-6 py-20">
    <div class="text-center md:text-left mb-16">
      <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">Proyectos Destacados</h2>
      <p class="text-gray-400 max-w-xl font-light">Una selección de aplicaciones web de producción real y alto rendimiento en las que he trabajado.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- Project 1: examenesdepau.es -->
      <div class="project-card glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full">
        <div class="p-6 sm:p-8 flex flex-col h-full">
          <div class="flex items-center justify-between mb-6">
            <span class="px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">Producción</span>
            <div class="flex gap-2">
              <a href="https://github.com/ebroelevado/examenes-PAU" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" title="Ver código en GitHub">
                <i data-lucide="github" class="w-5 h-5"></i>
              </a>
              <a href="https://examenesdepau.es" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" title="Visitar Sitio Web">
                <i data-lucide="external-link" class="w-5 h-5"></i>
              </a>
            </div>
          </div>
          
          <h3 class="font-heading font-bold text-2xl text-white mb-3">Exámenes de PAU</h3>
          <p class="text-gray-400 text-sm font-light mb-6 flex-grow leading-relaxed">
            Plataforma web para estudiantes de bachillerato en España para buscar y descargar exámenes de Selectividad. Cuenta con geolocalización de Comunidad Autónoma por IP y carga instantánea.
          </p>
          
          <div class="border-t border-white/5 pt-6 mt-auto">
            <h4 class="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">Características Clave</h4>
            <ul class="text-xs text-gray-400 space-y-2 mb-6">
              <li class="flex items-start gap-2">
                <span class="text-brand-500">✔</span> Caching de alto rendimiento en Cloudflare Edge.
              </li>
              <li class="flex items-start gap-2">
                <span class="text-brand-500">✔</span> Reducción de consultas a D1 (de 7 a 2 por búsqueda).
              </li>
              <li class="flex items-start gap-2">
                <span class="text-brand-500">✔</span> Geocaching por IP integrado en el CDN.
              </li>
            </ul>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-xs text-gray-300">Next.js 15</span>
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-xs text-gray-300">Cloudflare D1</span>
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-xs text-gray-300">Workers</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Project 2: pearfect.net -->
      <div class="project-card glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full">
        <div class="p-6 sm:p-8 flex flex-col h-full">
          <div class="flex items-center justify-between mb-6">
            <span class="px-2.5 py-1 rounded bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold">SaaS Dashboard</span>
            <div class="flex gap-2">
              <a href="https://github.com/ebroelevado/subscription-dashboard" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" title="Ver código en GitHub">
                <i data-lucide="github" class="w-5 h-5"></i>
              </a>
              <a href="https://pearfect.net" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" title="Visitar Sitio Web">
                <i data-lucide="external-link" class="w-5 h-5"></i>
              </a>
            </div>
          </div>
          
          <h3 class="font-heading font-bold text-2xl text-white mb-3">Pearfect Dashboard</h3>
          <p class="text-gray-400 text-sm font-light mb-6 flex-grow leading-relaxed">
            Dashboard corporativo premium para la administración y suscripciones de SaaS. Cuenta con asistente inteligente con IA integrado, gráficas analíticas en tiempo real y soporte internacional.
          </p>
          
          <div class="border-t border-white/5 pt-6 mt-auto">
            <h4 class="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">Características Clave</h4>
            <ul class="text-xs text-gray-400 space-y-2 mb-6">
              <li class="flex items-start gap-2">
                <span class="text-brand-500">✔</span> Asistente IA con historial persistente en AWS S3.
              </li>
              <li class="flex items-start gap-2">
                <span class="text-brand-500">✔</span> Autenticación segura vía NextAuth v5 + Prisma.
              </li>
              <li class="flex items-start gap-2">
                <span class="text-brand-500">✔</span> Soporte multiidioma dinámico (ES, EN, ZH).
              </li>
            </ul>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-xs text-gray-300">Next.js 16</span>
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-xs text-gray-300">Prisma & Postgres</span>
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-xs text-gray-300">Vercel AI SDK</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Project 3: raidtogether.fun -->
      <div class="project-card glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full">
        <div class="p-6 sm:p-8 flex flex-col h-full">
          <div class="flex items-center justify-between mb-6">
            <span class="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">Web Real-time</span>
            <div class="flex gap-2">
              <a href="https://github.com/ebroelevado/raid-app" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" title="Ver código en GitHub">
                <i data-lucide="github" class="w-5 h-5"></i>
              </a>
              <a href="https://raidtogether.fun" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" title="Visitar Sitio Web">
                <i data-lucide="external-link" class="w-5 h-5"></i>
              </a>
            </div>
          </div>
          
          <h3 class="font-heading font-bold text-2xl text-white mb-3">Raid Together</h3>
          <p class="text-gray-400 text-sm font-light mb-6 flex-grow leading-relaxed">
            Plataforma web de asaltos cooperativos interactivos. Permite crear salas de juego y lobbies colaborativos en tiempo real con una interfaz fluida e intuitiva para comunidades de gaming.
          </p>
          
          <div class="border-t border-white/5 pt-6 mt-auto">
            <h4 class="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">Características Clave</h4>
            <ul class="text-xs text-gray-400 space-y-2 mb-6">
              <li class="flex items-start gap-2">
                <span class="text-brand-500">✔</span> Lobbies de juego interactivos de baja latencia.
              </li>
              <li class="flex items-start gap-2">
                <span class="text-brand-500">✔</span> UI dinámica diseñada para pantallas móviles y PC.
              </li>
              <li class="flex items-start gap-2">
                <span class="text-brand-500">✔</span> Arquitectura serverless optimizada para costes.
              </li>
            </ul>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-xs text-gray-300">React</span>
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-xs text-gray-300">WebSockets</span>
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-xs text-gray-300">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Skills Section -->
  <section id="habilidades" class="relative max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
      <div class="lg:col-span-1 text-center lg:text-left">
        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">Stack Tecnológico</h2>
        <p class="text-gray-400 font-light leading-relaxed">
          Tengo experiencia construyendo aplicaciones robustas utilizando metodologías modernas e infraestructuras serverless en la nube.
        </p>
      </div>
      
      <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <!-- Frontend -->
        <div class="p-6 glass rounded-2xl">
          <div class="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-300 mb-4">
            <i data-lucide="layout" class="w-5 h-5"></i>
          </div>
          <h3 class="font-heading font-bold text-white text-lg mb-3">Frontend</h3>
          <ul class="text-sm text-gray-400 space-y-2 font-light">
            <li>TypeScript</li>
            <li>React 19 / Next.js 16</li>
            <li>Tailwind CSS 4</li>
            <li>Shadcn/UI / Radix</li>
            <li>Framer Motion</li>
          </ul>
        </div>

        <!-- Backend & DB -->
        <div class="p-6 glass rounded-2xl">
          <div class="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 mb-4">
            <i data-lucide="database" class="w-5 h-5"></i>
          </div>
          <h3 class="font-heading font-bold text-white text-lg mb-3">Backend & DB</h3>
          <ul class="text-sm text-gray-400 space-y-2 font-light">
            <li>Node.js / Bun</li>
            <li>PostgreSQL / SQLite</li>
            <li>Prisma ORM / Drizzle</li>
            <li>APIs REST / WebSockets</li>
            <li>Vercel AI SDK</li>
          </ul>
        </div>

        <!-- Cloud & Infra -->
        <div class="p-6 glass rounded-2xl">
          <div class="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 mb-4">
            <i data-lucide="cloud" class="w-5 h-5"></i>
          </div>
          <h3 class="font-heading font-bold text-white text-lg mb-3">Infra & Cloud</h3>
          <ul class="text-sm text-gray-400 space-y-2 font-light">
            <li>Cloudflare Workers</li>
            <li>Cloudflare Pages / D1</li>
            <li>DNS & Edge Caching</li>
            <li>AWS S3 Storage</li>
            <li>Git & GitHub Actions</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contacto" class="relative max-w-4xl mx-auto px-6 py-24 text-center">
    <div class="p-8 sm:p-12 glass rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl">
      <div class="glow-blob bg-brand-600 w-[300px] h-[300px] top-[-50px] left-[-50px] opacity-10"></div>
      
      <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4 relative z-10">¿Tienes un proyecto en mente?</h2>
      <p class="text-gray-400 max-w-xl mx-auto font-light mb-8 relative z-10 leading-relaxed">
        Tanto si es una idea de negocio SaaS como una plataforma educativa de alto tráfico, puedo ayudarte a conceptualizarla, programarla y desplegarla eficientemente.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
        <a href="mailto:ebroelevado@gmail.com" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-500 transition-all border border-brand-500/20">
          <i data-lucide="mail" class="w-4 h-4 mr-2"></i> Escríbeme un email
        </a>
        <a href="https://github.com/ebroelevado" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-gray-300 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:text-white transition-all">
          <i data-lucide="github" class="w-4 h-4 mr-2"></i> Ver GitHub
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="max-w-6xl mx-auto px-6 py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
    <p>© 2026 peramato.dev. Creado con amor y alojado en Cloudflare Workers.</p>
    <div class="flex gap-6">
      <a href="https://examenesdepau.es" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300 transition-colors">examenesdepau.es</a>
      <a href="https://pearfect.net" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300 transition-colors">pearfect.net</a>
      <a href="https://raidtogether.fun" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300 transition-colors">raidtogether.fun</a>
    </div>
  </footer>

  <!-- Initialize Lucide Icons -->
  <script>
    lucide.createIcons();
  </script>
</body>
</html>`;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
      },
    });
  },
};
