export interface Env { }

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const html = `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ángel Peramato Ayala | Desarrollador de Software</title>
  <meta name="description" content="Portfolio de Ángel Peramato Ayala. Estudiante de Ingeniería Informática. Creador de examenesdepau.es, pearfect.net y raidtogether.fun. Especialista en Cloudflare, Next.js, React y ciberseguridad.">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="https://examenesdepau.es/favicon.jpg">
  
  <!-- Google Fonts: Newsreader (Editorial Serif) & Inter (Clean Sans) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap" rel="stylesheet">
  
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
    
    .border-subtle {
      border-color: #e5e5e0;
    }

    /* Minimalist selection styling */
    ::selection {
      background: #e5e5e0;
      color: #191919;
    }
    
    .project-card {
      transition: all 0.3s ease;
    }
    
    .project-card:hover {
      background-color: #f5f5f3;
    }
  </style>
</head>
<body class="antialiased min-h-screen flex flex-col selection:bg-clay-200">

  <!-- Header -->
  <header class="w-full border-b border-clay-200 py-6 px-6 sm:px-12 bg-clay-50 sticky top-0 z-40">
    <div class="max-w-4xl mx-auto flex items-center justify-between">
      <a href="#" class="font-serif text-xl font-medium tracking-tight text-clay-900">
        Ángel Peramato
      </a>
      
      <nav class="flex items-center gap-6 text-sm text-clay-600">
        <a href="#proyectos" class="hover:text-clay-900 transition-colors">Proyectos</a>
        <a href="#sobre-mi" class="hover:text-clay-900 transition-colors">Sobre mí</a>
        <a href="#contacto" class="hover:text-clay-900 transition-colors">Contacto</a>
      </nav>
    </div>
  </header>

  <!-- Main Container -->
  <main class="flex-grow max-w-4xl w-full mx-auto px-6 sm:px-12 py-16 sm:py-24 space-y-24">
    
    <!-- Hero / Intro -->
    <section class="space-y-6">
      <h1 class="font-serif text-4xl sm:text-6xl text-clay-900 tracking-tight leading-none font-light">
        Desarrollo de software guiado por la <span class="italic font-normal">simplicidad</span>, el rendimiento y la ciberseguridad.
      </h1>
      
      <p class="text-clay-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
        Hola, soy Ángel. Tengo 18 años y soy estudiante de Ingeniería Informática en la Universidad de Cantabria (UC). Construyo herramientas web eficientes y seguras, principalmente utilizando el ecosistema de Cloudflare, Next.js y React, además de diseñar aplicaciones móviles con Flutter y Firebase.
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
        <h2 class="font-serif text-2xl font-normal text-clay-900">Proyectos</h2>
      </div>

      <div class="divide-y divide-clay-200">
        
        <!-- Project 1: examenesdepau.es -->
        <article class="project-card py-8 flex flex-col md:flex-row gap-6 items-start rounded-xl px-4 -mx-4 transition-colors">
          <div class="flex-grow space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="font-serif text-xl font-medium text-clay-900">
                <a href="https://examenesdepau.es" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-center gap-1.5">
                  Exámenes de PAU <i data-lucide="arrow-up-right" class="w-4 h-4 text-clay-600"></i>
                </a>
              </h3>
            </div>
            
            <p class="text-clay-600 text-sm font-light leading-relaxed">
              Plataforma web educativa para estudiantes de bachillerato en España. Permite buscar y descargar exámenes de Selectividad. Cuenta con geolocalización automática por IP para mostrar exámenes de la región del usuario directamente.
            </p>
            
            <div class="flex flex-wrap gap-2 text-xs font-mono text-clay-600">
              <span>Next.js</span>
              <span>•</span>
              <span>Cloudflare Workers</span>
              <span>•</span>
              <span>D1 SQL</span>
              <span>•</span>
              <span>Edge Caching</span>
            </div>
          </div>
          
          <div class="w-full md:w-48 flex-shrink-0 border border-clay-200 rounded-lg p-2 bg-white flex items-center justify-center">
            <span class="text-xs font-mono text-clay-600 uppercase tracking-wider">examenesdepau.es</span>
          </div>
        </article>

        <!-- Project 2: pearfect.net -->
        <article class="project-card py-8 flex flex-col md:flex-row gap-6 items-start rounded-xl px-4 -mx-4 transition-colors">
          <div class="flex-grow space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="font-serif text-xl font-medium text-clay-900">
                <a href="https://pearfect.net" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-center gap-1.5">
                  Pearfect Dashboard <i data-lucide="arrow-up-right" class="w-4 h-4 text-clay-600"></i>
                </a>
              </h3>
            </div>
            
            <p class="text-clay-600 text-sm font-light leading-relaxed">
              Panel premium de administración y gestión de suscripciones SaaS corporativas. Incluye gráficas analíticas en tiempo real (Recharts), un asistente interactivo con IA (Vercel AI SDK) con almacenamiento persistente en AWS S3 y soporte multiidioma.
            </p>
            
            <div class="flex flex-wrap gap-2 text-xs font-mono text-clay-600">
              <span>Next.js 16</span>
              <span>•</span>
              <span>React 19</span>
              <span>•</span>
              <span>Prisma ORM</span>
              <span>•</span>
              <span>PostgreSQL</span>
              <span>•</span>
              <span>AWS S3</span>
            </div>
          </div>
          
          <div class="w-full md:w-48 flex-shrink-0 border border-clay-200 rounded-lg p-2 bg-white flex items-center justify-center">
            <span class="text-xs font-mono text-clay-600 uppercase tracking-wider">pearfect.net</span>
          </div>
        </article>

        <!-- Project 3: raidtogether.fun -->
        <article class="project-card py-8 flex flex-col md:flex-row gap-6 items-start rounded-xl px-4 -mx-4 transition-colors">
          <div class="flex-grow space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="font-serif text-xl font-medium text-clay-900">
                <a href="https://raidtogether.fun" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-center gap-1.5">
                  Raid Together <i data-lucide="arrow-up-right" class="w-4 h-4 text-clay-600"></i>
                </a>
              </h3>
            </div>
            
            <p class="text-clay-600 text-sm font-light leading-relaxed">
              Aplicación móvil nativa diseñada para la coordinación en tiempo real de incursiones (raids) en comunidades de Pokémon GO a nivel mundial. Construida para brindar una experiencia ágil y de muy baja latencia.
            </p>
            
            <div class="flex flex-wrap gap-2 text-xs font-mono text-clay-600">
              <span>Flutter</span>
              <span>•</span>
              <span>Firebase</span>
              <span>•</span>
              <span>Android App</span>
            </div>
          </div>
          
          <div class="w-full md:w-48 flex-shrink-0 flex flex-col items-center gap-1">
            <span class="text-xs text-clay-600 font-mono text-center">raidtogether.fun</span>
            <div class="w-16 h-16 border border-clay-200 rounded-lg bg-clay-900 flex items-center justify-center mt-3">
              <img src="https://image.raidtogether.fun/images/screenshots/logo.webp?v=2" alt="Raid Together Logo" class="h-10 object-contain brightness-0 invert">
            </div>
          </div>
        </article>

      </div>
    </section>

    <!-- Tech Stack / Skills -->
    <section id="sobre-mi" class="space-y-8">
      <div class="border-b border-clay-200 pb-4">
        <h2 class="font-serif text-2xl font-normal text-clay-900">Habilidades & Especialidad</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-light leading-relaxed text-clay-600">
        <div class="space-y-4">
          <h3 class="font-serif text-lg font-medium text-clay-900">Desarrollo e Infraestructura</h3>
          <p>
            Especializado en el desarrollo de arquitecturas web con **Next.js** y **React**. Implemento soluciones eficientes en el ecosistema **Cloudflare Workers / Pages**, utilizando bases de datos D1 SQL y reduciendo drásticamente la latencia en el borde mediante técnicas avanzadas de caching. También desarrollo aplicaciones móviles nativas multiplataforma con **Flutter**.
          </p>
        </div>
        
        <div class="space-y-4">
          <h3 class="font-serif text-lg font-medium text-clay-900">Ciberseguridad & Scraping</h3>
          <p>
            Cuento con conocimientos de ciberseguridad a nivel medio (aseguramiento de endpoints, análisis de vulnerabilidades y configuración segura de CDN/Firewalls de Cloudflare). Desarrollo scripts de **web scraping** estructurados para la ingesta y estructuración automática de datos en bases de datos relacionales y de clave-valor.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact & Footer -->
    <section id="contacto" class="border-t border-clay-200 pt-16 space-y-6 text-center">
      <h2 class="font-serif text-3xl text-clay-900">Contacto</h2>
      <p class="text-clay-600 text-sm font-light max-w-md mx-auto">
        Si tienes un proyecto interesante o estás interesado en trabajar conmigo, puedes escribirme directamente.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
        <a href="mailto:angel@peramato.dev" class="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-clay-900 hover:bg-clay-900/90 rounded-lg transition-colors">
          <i data-lucide="mail" class="w-4 h-4 mr-2"></i> Enviar Email
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
      <p>© 2026 Ángel Peramato. Alojado en Cloudflare Workers.</p>
      <div class="flex gap-4">
        <a href="https://examenesdepau.es" target="_blank" rel="noopener noreferrer" class="hover:underline">examenesdepau.es</a>
        <a href="https://pearfect.net" target="_blank" rel="noopener noreferrer" class="hover:underline">pearfect.net</a>
        <a href="https://raidtogether.fun" target="_blank" rel="noopener noreferrer" class="hover:underline">raidtogether.fun</a>
      </div>
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
