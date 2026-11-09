/* ============================================================
   HC GROUP — script.js
   JavaScript extraído de index.html (mismo código, sin cambios
   de lógica, solo movido a un archivo aparte)
   ============================================================ */

/* ============================================================
   INTERNACIONALIZACIÓN (ES / EN)
   ------------------------------------------------------------
   Diccionario con TODOS los textos traducibles del sitio.
   - Los textos estáticos del HTML se marcan con:
       data-i18n="clave"            → reemplaza textContent
       data-i18n-html="clave"       → reemplaza innerHTML (para
                                       textos con <strong> etc.)
       data-i18n-placeholder="clave"→ reemplaza el placeholder
       data-i18n-aria="clave"       → reemplaza aria-label
   - Los textos generados por JavaScript (reseñas, mensajes de
     formulario, el efecto de escritura del hero, etc.) llaman
     a la función hcT('clave') donde se necesiten.
   Guardamos el idioma elegido en localStorage para que se
   recuerde entre visitas.
   ============================================================ */
window.HC_I18N = {
  es: {
    skip_link: "Saltar al contenido",
    announce_html: '¡Conozca nuestra <a href="./mantenimiento.html" class="announce-link"><strong>nueva línea</strong></a> de equipos y soluciones para el sector salud! \u{1FA7A}',
    badge_novedad: "Novedad",
    search_placeholder: "Buscar",
    search_aria: "Buscar",
    call_us: "Llámenos",
    contact: "Contacto",
    btn_cotizar: "Cotizar",
    nav_nosotros: "Nosotros",
    nav_unidades: "Unidades",
    nav_diferencia: "Por qué HC",
    nav_portal: "Portal de clientes",
    nav_partners_label: "Nuestras marcas",
    menu_open: "Abrir menú",
    menu_close: "Cerrar menú",
    menu_nav_label: "Navegación principal",
    menu_boletin: "Boletín",
    hero_badge: "Grupo empresarial · Sector salud",
    hero_title_line1: "Transformando la salud a través de",
    hero_typed: "soluciones integrales",
    hero_btn_portal: "Acceder al portal",
    hero_btn_units: "Conozca nuestros equipos",
    strip1_title: "Equipos médicos",
    strip1_text: "Distribución de tecnología e insumos para salud humana y veterinaria.",
    strip2_title: "Educación continua",
    strip2_text: "Cursos y diplomados en alianza con instituciones académicas de prestigio.",
    strip3_title: "Servicios especializados",
    strip3_text: "Acompañamiento, soporte y mantenimiento con estructura profesional propia.",
    historia_badge: "Nuestra historia",
    historia_title: "De una marca pionera a un grupo empresarial.",
    historia_lede: "HC GROUP es una organización con más de 8 años de experiencia en la distribución de equipos médicos y el desarrollo de soluciones especializadas para el sector salud.",
    stat_years: "años de trayectoria",
    stat_units: "unidades activas",
    stat_founded: "Año de fundación",
    tl1_year: "Origen",
    tl1_title: "Nace Medicodont",
    tl1_text_html: 'Una marca enfocada en atender las necesidades de estudiantes y profesionales de la salud que requerían acceso a <strong>insumos y equipos médicos de calidad</strong>.',
    tl2_title: "Nace HC GROUP",
    tl2_text_html: 'El crecimiento sostenido y la expansión de nuestras líneas de negocio nos llevaron a consolidar, bajo una misma visión, <strong>todas nuestras unidades especializadas</strong> como marca corporativa.',
    catalogo_badge: "Catálogo de equipos",
    catalogo_title: "Equipos disponibles para su institución.",
    catalogo_intro: "Una muestra de los equipos que distribuimos. Contáctenos para conocer disponibilidad y precio actualizado de cada modelo.",
    catalogo_precio_consultar: "Precio a consultar",
    catalogo_agotado: "AGOTADO",
    marcas_badge: "Nuestras marcas",
    reviews_badge: "Opiniones verificadas",
    review_write: "Escriba una reseña",
    review_filter_aria: "Mostrar u ocultar reseñas",
    review_name_label: "Su nombre",
    review_photo_label: "Agregar una foto (opcional)",
    review_photo_placeholder: "Agregar foto",
    review_photo_remove: "Quitar foto",
    review_name_placeholder: "Nombre y apellido",
    review_rating_label: "Calificación",
    review_text_label: "Su comentario",
    review_text_placeholder: "Cuéntenos su experiencia",
    review_submit: "Enviar reseña para revisión",
    review_cancel: "Cancelar",
    review_modal_title: "Comparta su experiencia con HC GROUP",
    review_modal_intro: "Su opinión nos ayuda a seguir mejorando. Le pedimos redactar su comentario con respeto y profesionalismo; nuestro equipo revisa cada reseña antes de publicarla en el sitio.",
    review_modal_done_title: "¡Gracias por compartir su experiencia!",
    review_modal_done_text: "",
    review_modal_sending_title: "Enviando su reseña…",
    review_modal_sending_sub: "",
    review_singular: "Reseña",
    review_plural: "Reseñas",
    review_hide_aria: "Ocultar esta reseña",
    review_verified: "Verificada",
    review_view_aria_prefix: "Ver reseña",
    team_badge: "Nuestro Equipo",
    team_title: "Talento humano que impulsa el cambio.",
    role_gerente_comercial: "Gerente Comercial",
    role_compras: "Asistente de Compras e Importaciones",
    role_asesor_comercial: "Asesor Comercial",
    role_community_manager: "Community Manager",
    role_atencion_cliente: "Atención al cliente",
    role_diseno_grafica: "Diseñadora Gráfica",
    role_bienestar: "Gestión del Bienestar Humano",
    role_marketing_diseno: "Marketing y Diseño",
    role_generales: "Servicios Generales",
    contact_badge: "Visítenos",
    contact_title: '<span class="contact-title-black-fx">Encuéntrenos en Managua</span>',
    map_link: "Ver ubicación exacta en Google Maps",
    form_head_title: "Solicite información",
    form_head_sub: "Le respondemos en menos de 24 horas hábiles.",
    label_name: "Nombre completo",
    label_email: "Correo electrónico",
    label_phone: "Teléfono / WhatsApp",
    label_segment: "¿Qué unidad necesitas?",
    opt_select: "Selecciona una opción",
    opt_medicodont: "Medicodont — equipos médicos",
    opt_vetcare: "Vetcare — veterinaria",
    opt_docens: "Docens — educación continua",
    opt_servicio: "Servicio técnico",
    label_message: "Cuéntenos brevemente (opcional)",
    btn_send_lead: "Enviar solicitud",
    form_note: "Al enviar se abrirá su correo con los datos listos para enviarlos a gerencia@hcgrouplatam.com.",
    form_error_fields: "Revisa los campos marcados antes de continuar.",
    form_sending_title: "Enviando su solicitud…",
    form_sending_sub: "Un momento, estamos preparando su mensaje.",
    form_success_title_prefix: "¡Listo, ",
    form_success_sub_prefix: "Se abrirá su correo para confirmar el envío a ",
    mail_subject_prefix: "Nueva solicitud desde HC GROUP — ",
    mail_label_name: "Nombre: ",
    mail_label_email: "Correo: ",
    mail_label_phone: "Teléfono / WhatsApp: ",
    mail_no_phone: "No proporcionado",
    mail_label_unit: "Unidad de interés: ",
    mail_label_message: "Mensaje: ",
    mail_no_message: "Sin mensaje adicional",
    catalog_title: "Solicita su catálogo",
    label_your_email: "Tu correo electrónico",
    catalog_note: "Al enviar este formulario, confirma que acepta que usemos su correo únicamente para enviarle el catálogo.",
    btn_request: "Solicitar",
    footer_services_title: "Servicios",
    footer_link_equipos: "Equipos Médicos",
    footer_link_educacion: "Educación Continua",
    footer_link_servicios: "Servicios Especializados",
    footer_company_title: "Empresa",
    footer_link_quienes: "Quiénes Somos",
    footer_link_porque: "Por qué elegirnos",
    footer_link_contactanos: "Contáctenos",
    copyright: "© 2024 HC GROUP. Todos los derechos reservados.",
    close: "Cerrar",
    redirect_title: "Redirigiendo a su correo…",
    redirect_sub: "Estamos abriendo su aplicación de correo para enviar la solicitud",
    lead_sending_title: "Enviando sus datos…",
    lead_sending_sub: "Estamos guardando su solicitud, un momento por favor.",
    redirect_done_title: "¡Listo! Su solicitud fue enviada.",
    redirect_done_sub: "Gracias por contactarse con HC GROUP.",
    toast_working: "Estamos trabajando en esta sección \u{1F6A7}",
    review1_text: "Excelente atención desde la primera llamada hasta la entrega. El equipo llegó completo, bien embalado y con todos los documentos en regla.",
    review1_reply: "¡Muchas gracias, Marlene! Nos alegra muchísimo saber que todo el proceso, desde el primer contacto hasta la entrega, cumplió con sus expectativas.",
    review2_text: "El soporte técnico fue muy rápido resolviendo una duda de instalación. Se nota que conocen bien los equipos que venden.",
    review2_reply: "¡Gracias, Carlos! Para nosotros es muy importante que el acompañamiento no termine en la entrega, así que valoramos mucho su comentario.",
    review3_text: "Buena variedad de equipos y precios competitivos. El tiempo de entrega fue un poco más largo de lo esperado, pero el resultado valió la pena.",
    review3_reply: "Gracias por su honestidad, Fernanda. Estamos trabajando para optimizar nuestros tiempos de entrega y seguir mejorando la experiencia de compra."
  },
  en: {
    skip_link: "Skip to content",
    announce_html: 'Check out our <a href="./mantenimiento.html" class="announce-link"><strong>new line</strong></a> of equipment and solutions for the health sector! \u{1FA7A}',
    badge_novedad: "News",
    search_placeholder: "Search",
    search_aria: "Search",
    call_us: "Call us",
    contact: "Contact",
    btn_cotizar: "Quote",
    nav_nosotros: "About us",
    nav_unidades: "Business units",
    nav_diferencia: "Why HC",
    nav_portal: "Client portal",
    nav_partners_label: "Our brands",
    menu_open: "Open menu",
    menu_close: "Close menu",
    menu_nav_label: "Main navigation",
    menu_boletin: "Newsletter",
    hero_badge: "Business group · Health sector",
    hero_title_line1: "Transforming healthcare through",
    hero_typed: "comprehensive solutions",
    hero_btn_portal: "Access the portal",
    hero_btn_units: "Meet our teams",
    strip1_title: "Medical equipment",
    strip1_text: "Distribution of technology and supplies for human and veterinary health.",
    strip2_title: "Continuing education",
    strip2_text: "Courses and diplomas in partnership with prestigious academic institutions.",
    strip3_title: "Specialized services",
    strip3_text: "Support, maintenance, and follow-up backed by our own professional team.",
    historia_badge: "Our story",
    historia_title: "From a pioneering brand to a business group.",
    historia_lede: "HC GROUP is an organization with more than 8 years of experience distributing medical equipment and developing specialized solutions for the health sector.",
    stat_years: "years of experience",
    stat_units: "active business units",
    stat_founded: "Founding year",
    tl1_year: "Origins",
    tl1_title: "Medicodont is founded",
    tl1_text_html: 'A brand focused on meeting the needs of students and healthcare professionals who required access to <strong>quality medical supplies and equipment</strong>.',
    tl2_title: "HC GROUP is founded",
    tl2_text_html: 'Sustained growth and the expansion of our business lines led us to bring together, under a single vision, <strong>all our specialized units</strong> as one corporate brand.',
    catalogo_badge: "Equipment catalog",
    catalogo_title: "Equipment available for your institution.",
    catalogo_intro: "A sample of the equipment we distribute. Contact us to check availability and current pricing for each model.",
    catalogo_precio_consultar: "Price on request",
    catalogo_agotado: "SOLD OUT",
    marcas_badge: "Our brands",
    reviews_badge: "Verified reviews",
    review_write: "Write a review",
    review_filter_aria: "Show or hide reviews",
    review_name_label: "Your name",
    review_photo_label: "Add a photo (optional)",
    review_photo_placeholder: "Add photo",
    review_photo_remove: "Remove photo",
    review_name_placeholder: "First and last name",
    review_rating_label: "Rating",
    review_text_label: "Your comment",
    review_text_placeholder: "Tell us about your experience",
    review_submit: "Submit review for approval",
    review_cancel: "Cancel",
    review_modal_title: "Share your experience with HC GROUP",
    review_modal_intro: "Your feedback helps us keep improving. Please write your comment respectfully and professionally; our team reviews every submission before it is published on the site.",
    review_modal_done_title: "Thank you for sharing your experience!",
    review_modal_done_text: "",
    review_modal_sending_title: "Sending your review…",
    review_modal_sending_sub: "",
    review_singular: "Review",
    review_plural: "Reviews",
    review_hide_aria: "Hide this review",
    review_verified: "Verified",
    review_view_aria_prefix: "View review",
    team_badge: "Our Team",
    team_title: "The people driving our progress.",
    role_gerente_comercial: "Commercial Manager",
    role_compras: "Purchasing & Imports Assistant",
    role_asesor_comercial: "Sales Advisor",
    role_community_manager: "Community Manager",
    role_atencion_cliente: "Customer Support",
    role_diseno_grafica: "Graphic Designer",
    role_bienestar: "Human Wellness Management",
    role_marketing_diseno: "Marketing & Design",
    role_generales: "General Services",
    contact_badge: "Visit us",
    contact_title: '<span class="contact-title-black-fx">Find us in Managua</span>',
    map_link: "See exact location on Google Maps",
    form_head_title: "Request information",
    form_head_sub: "We reply within 24 business hours.",
    label_name: "Full name",
    label_email: "Email address",
    label_phone: "Phone / WhatsApp",
    label_segment: "Which unit do you need?",
    opt_select: "Select an option",
    opt_medicodont: "Medicodont — medical equipment",
    opt_vetcare: "Vetcare — veterinary",
    opt_docens: "Docens — continuing education",
    opt_servicio: "Technical service",
    label_message: "Tell us briefly (optional)",
    btn_send_lead: "Send request",
    form_note: "When you submit, your email app will open with everything ready to send to gerencia@hcgrouplatam.com.",
    form_error_fields: "Please check the highlighted fields before continuing.",
    form_sending_title: "Sending your request…",
    form_sending_sub: "One moment, we are preparing your message.",
    form_success_title_prefix: "All set, ",
    form_success_sub_prefix: "Your email app will open to confirm sending to ",
    mail_subject_prefix: "New request from HC GROUP — ",
    mail_label_name: "Name: ",
    mail_label_email: "Email: ",
    mail_label_phone: "Phone / WhatsApp: ",
    mail_no_phone: "Not provided",
    mail_label_unit: "Unit of interest: ",
    mail_label_message: "Message: ",
    mail_no_message: "No additional message",
    catalog_title: "Request your catalog",
    label_your_email: "Your email address",
    catalog_note: "By submitting this form, you confirm you agree to us using your email solely to send you the catalog.",
    btn_request: "Request",
    footer_services_title: "Services",
    footer_link_equipos: "Medical Equipment",
    footer_link_educacion: "Continuing Education",
    footer_link_servicios: "Specialized Services",
    footer_company_title: "Company",
    footer_link_quienes: "About Us",
    footer_link_porque: "Why choose us",
    footer_link_contactanos: "Contact us",
    copyright: "© 2024 HC GROUP. All rights reserved.",
    close: "Close",
    redirect_title: "Redirecting to your email…",
    redirect_sub: "We are opening your email app to send the request",
    lead_sending_title: "Sending your data…",
    lead_sending_sub: "We are saving your request, just a moment please.",
    redirect_done_title: "All set! Your request has been sent.",
    redirect_done_sub: "Thank you for reaching out to HC GROUP.",
    toast_working: "We are working on this section \u{1F6A7}",
    review1_text: "Excellent service from the very first call through delivery. The equipment arrived complete, well packaged, and with all the paperwork in order.",
    review1_reply: "Thank you so much, Marlene! We are thrilled to hear the whole process, from first contact to delivery, met your expectations.",
    review2_text: "Technical support was very quick resolving an installation question. You can tell they really know the equipment they sell.",
    review2_reply: "Thanks, Carlos! It is very important to us that our support does not end at delivery, so we really value your comment.",
    review3_text: "Good variety of equipment and competitive prices. Delivery took a bit longer than expected, but the result was worth the wait.",
    review3_reply: "Thank you for your honesty, Fernanda. We are working to optimize our delivery times and keep improving the shopping experience."
  }
};

/* Idioma activo: se recuerda en localStorage (o español por defecto) */
window.HC_LANG = (function(){
  try { var saved = localStorage.getItem('hc-lang'); return (saved === 'en' || saved === 'es') ? saved : 'es'; }
  catch(e){ return 'es'; }
})();

/* Traduce una clave al idioma activo (con reserva en español si falta) */
function hcT(key){
  var dict = window.HC_I18N[window.HC_LANG] || window.HC_I18N.es;
  if (key in dict) return dict[key];
  return window.HC_I18N.es[key] || '';
}

/* ---------- Bloque 2: CARRUSEL DE EQUIPO ("Nuestro Equipo", con datos desde Google Sheets si están disponibles) ---------- */
    (function(){
      var car = document.getElementById('teamCarousel');
      if(!car) return;
      var track = car.querySelector('.team-track');
      var dotsBox = car.querySelector('.team-dots');
      var i = 0, timer = null, DELAY = 3500;
      var cards = [];

            var initialTeamData = [
        { image: new URL("./1.png", import.meta.url).href, name: "Ing. Bayron Andero", role: "Gerente Comercial" },
        { image: new URL("./2.png", import.meta.url).href, name: "Ing. Willie Cuadra", role: "Asesor Comercial" },
        { image: new URL("./3.png", import.meta.url).href, name: "Ing. Joshua Sevilla", role: "Asistente de electromedicina" },
        { image: new URL("./4.png", import.meta.url).href, name: "Ing. Joel Nuñez", role: "Responsable de Adquisiciones" },
        { image: new URL("./5.png", import.meta.url).href, name: "Lic. Jeriel Gutiérrez", role: "Asesor Comercial" },
        { image: new URL("./6.png", import.meta.url).href, name: "Lic. Cristhell Almanza", role: "Asistente administrativo y recepción" },
        { image: new URL("./7.png", import.meta.url).href, name: "Lic. Ashly Vivas", role: "Diseñadora Gráfica" },
        { image: new URL("./8.png", import.meta.url).href, name: "Lic. Ashley Jiron", role: "Gestión del Bienestar Humano" },
        { image: new URL("./9.png", import.meta.url).href, name: "Lic. Jared Manzanares", role: "Marketing y Diseño" },
        { image: new URL("./10.png", import.meta.url).href, name: "Amelia Gonzales", role: "Servicios Generales" },
        { image: new URL("./11.png", import.meta.url).href, name: "Lic. Luis Zamora", role: "Auxiliar de Operaciones y Bodega" },
        { image: new URL("./12.png", import.meta.url).href, name: "Lic. Christopher Torres", role: "Responsable de Operaciones y Bodega" },
        { image: new URL("./13.png", import.meta.url).href, name: "Lic. Jennifer Obando", role: "Gerente Administrativo" },
        { image: new URL("./14.png", import.meta.url).href, name: "Ing. Kevin Rivas J.", role: "Asistente de electromedicina" },
        { image: new URL("./15.png", import.meta.url).href, name: "Ing. Rodolfo Salinas", role: "Asistente de electromedicina" },
        { image: new URL("./16.png", import.meta.url).href, name: "Ing. Natividad Picado R.", role: "Ingeniero Supervisor/Campo" },
        { image: new URL("./17.png", import.meta.url).href, name: "Dr. Wilber Matamoro", role: "CEO HC Group" },
        { image: new URL("./18.png", import.meta.url).href, name: "Lic. Ana Moya", role: "Recursos Humanos" },
        { image: new URL("./19.png", import.meta.url).href, name: "Dra. Grethel Olivas", role: "Asesora Aplicacionista" }
      ];

      // Eliminar duplicados en base al nombre y rol
      var uniqueTeam = initialTeamData.filter(function(item, index, self) {
        return index === self.findIndex(function(t) {
          return t.name === item.name && t.role === item.role;
        });
      });

      // Asegurar un ID para cada integrante
      uniqueTeam = uniqueTeam.map(function(item, index) {
        return {
          id: index + 1,
          name: item.name,
          role: item.role,
          photo: item.image // mapeamos 'image' a 'photo' como espera la función
        };
      });

      function perView(){
        var w = window.innerWidth;
        return w <= 560 ? 1 : (w <= 900 ? 2 : 3);
      }
      function pages(){ return Math.max(1, cards.length - perView() + 1); }

      function buildDots(){
        dotsBox.innerHTML = '';
        for(var k=0; k<pages(); k++){
          (function(k){
            var b = document.createElement('button');
            b.type='button'; b.className='car-dot';
            b.setAttribute('aria-label','Integrantes ' + (k+1));
            b.addEventListener('click', function(){ go(k); restart(); });
            dotsBox.appendChild(b);
          })(k);
        }
      }
      function go(n){
        var p = pages();
        if (p <= 0) return;
        i = ((n % p) + p) % p;
        if (!cards.length) return;
        var gap = parseFloat(getComputedStyle(track).gap) || 24;
        var step = cards[0].getBoundingClientRect().width + gap;
        track.style.transform = 'translateX(' + (-i*step) + 'px)';
        var ds = dotsBox.children;
        for(var k=0;k<ds.length;k++){ ds[k].classList.toggle('on', k===i); }
      }
      function start(){ if(!timer) timer = setInterval(function(){ go(i+1); }, DELAY); }
      function stop(){ clearInterval(timer); timer = null; }
      function restart(){ stop(); start(); }

      function refrescarTarjetas(){
        cards = Array.prototype.slice.call(track.children);
        i = 0;
        buildDots(); go(0);
      }

      function escaparHTML_(str){
        var d = document.createElement('div');
        d.textContent = str || '';
        return d.innerHTML;
      }
            function tarjetaEquipoHTML(miembro){
        var fotoSrc = miembro.photo ? escaparHTML_(miembro.photo) : '';
        
        // Limpiar cualquier cadena en base64 de la fuente de datos
        if (fotoSrc.indexOf('data:image') === 0) {
            fotoSrc = '';
        }
        
        // Fallback robusto usando onerror y manejando el caso sin foto
        var fotoHTML = fotoSrc
          ? '<img src="' + fotoSrc + '" alt="' + escaparHTML_(miembro.name) + '" style="width: 100%; height: auto; object-fit: contain;"  draggable="false">'
          : '<div class="team-photo-fallback" style="display:flex;align-items:center;justify-content:center;background:#0E70B6;color:#fff;width:100%;height:100%;font-size:3rem;font-weight:700;">' + escaparHTML_((miembro.name || '?').charAt(0).toUpperCase()) + '</div>';
        
        return '<figure class="team-card" data-id="' + miembro.id + '">' +
          '<div class="card-img">' + fotoHTML + '</div>' +
          '<figcaption class="meta"><strong>' + escaparHTML_(miembro.name) + '</strong><span>' + escaparHTML_(miembro.role) + '</span></figcaption>' +
        '</figure>';
      }

      window.hcRenderEquipoDesdeSheets = function(miembros){
        if (!Array.isArray(miembros) || !miembros.length) return;
        track.innerHTML = miembros.map(tarjetaEquipoHTML).join('');
        refrescarTarjetas();
      };

      // Inicializar con la data local filtrada
      window.hcRenderEquipoDesdeSheets(uniqueTeam);

      car.querySelector('[data-team-prev]').addEventListener('click', function(){ go(i-1); restart(); });
      car.querySelector('[data-team-next]').addEventListener('click', function(){ go(i+1); restart(); });
      car.addEventListener('mouseenter', stop);
      car.addEventListener('mouseleave', start);
      window.addEventListener('resize', function(){ buildDots(); go(i); });

      var vp = car.querySelector('.team-viewport');
      var tsx=0, tdx=0, tmoved=false;
      vp.addEventListener('touchstart', function(e){ stop(); tsx=e.touches[0].clientX; tdx=0; tmoved=false; track.style.transition='none'; }, {passive:true});
      vp.addEventListener('touchmove', function(e){ 
        tdx=e.touches[0].clientX - tsx; 
        if(Math.abs(tdx)>10) tmoved=true; 
        if(tmoved && cards.length > 0){
          var gap = parseFloat(getComputedStyle(track).gap) || 24;
          var step = cards[0].getBoundingClientRect().width + gap;
          track.style.transform = 'translateX(' + (-i*step + tdx) + 'px)';
        }
      }, {passive:true});
      vp.addEventListener('touchend', function(){ 
        track.style.transition = '';
        if(tmoved){ 
          if(tdx<-40){ go(i+1); } else if(tdx>40){ go(i-1); } else { go(i); } 
        } 
        start(); 
      });
      vp.addEventListener('touchcancel', function(){ track.style.transition=''; go(i); start(); });

      start();
    })();

/* ---------- Bloque 3: script principal (header, menú, formulario, popups, etc.) ---------- */
/* ============================================================
   HC GROUP — script.js (inline)
   ============================================================
   BLOQUE JS — índice de comportamientos (en el orden en que
   aparecen más abajo, cada uno bajo un comentario separador
   con el nombre del bloque entre guiones):

     Almacenamiento seguro   → wrapper sobre localStorage con respaldo en memoria
     Año en footer           → año actual automático en el copyright
     Conteo animado          → números "+8 / 3" del hero suben desde 0
     Header con sombra       → clase .scrolled al hacer scroll
     Menú móvil              → abrir/cerrar nav lateral + backdrop
     Revelado al hacer scroll→ animación de aparición (IntersectionObserver)
     Banner de cookies       → mostrar/ocultar + guardar preferencia
     Formulario de contacto  → validación + arma un "mailto:" (no hay servidor)
     Enlaces "portal"        → abren el portal externo en pestaña nueva
     Clonar logo             → copia el logo del header a shop-row/menú/catálogo
     Foto real de unidades   → copia una foto del carrusel al popup del boletín
     Menú "solicitar catálogo" → abre/cierra el mini menú correo/WhatsApp
     Enlaces "próximamente"  → aviso flotante para enlaces sin destino aún
     Clonar logos de marcas  → logos de aliados al menú móvil
     Buscador (decorativo)
     Ventana emergente (boletín) → abrir/cerrar + envío simulado
     Burbuja WhatsApp        → mostrar/ocultar el globo de ayuda
     Reseñas                 → carrusel, filtro, formulario de nueva reseña
     Carruseles (equipo / unidades) → autoplay, flechas, puntos, zoom, swipe
   ============================================================ */
(function(){
  "use strict";

  /* --- almacenamiento seguro (degrada si está bloqueado, p.ej. en sandbox) --- */
  var mem = {};
  var store = {
    get: function(k){ try { return localStorage.getItem(k); } catch(e){ return mem[k] || null; } },
    set: function(k,v){ try { localStorage.setItem(k,v); } catch(e){ mem[k]=v; } }
  };

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- APLICAR TRADUCCIONES (recorre todo el HTML marcado con data-i18n*) ---------- */
  function applyStaticTranslations(){
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if (key in window.HC_I18N.es) el.textContent = hcT(key);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var key = el.getAttribute('data-i18n-html');
      if (key in window.HC_I18N.es) el.innerHTML = hcT(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      var val = hcT(el.getAttribute('data-i18n-placeholder'));
      if (val) el.setAttribute('placeholder', val);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el){
      var val = hcT(el.getAttribute('data-i18n-aria'));
      if (val) el.setAttribute('aria-label', val);
    });
    document.documentElement.setAttribute('lang', window.HC_LANG);
  }
  applyStaticTranslations();

  /* ---------- SELECTOR DE IDIOMA (ES / EN) ---------- */
  var langButtons = document.querySelectorAll('.lang-btn');
  function updateLangButtons(){
    langButtons.forEach(function(btn){
      var isActive = btn.getAttribute('data-lang') === window.HC_LANG;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }
  function setLanguage(lang){
    if (lang !== 'es' && lang !== 'en') return;
    window.HC_LANG = lang;
    try { localStorage.setItem('hc-lang', lang); } catch(e){}
    applyStaticTranslations();
    updateLangButtons();
    // El efecto de escritura del hero retoma la palabra en el idioma nuevo
    if (typeof refreshHeroTypewriter === 'function') refreshHeroTypewriter();
    // Las reseñas (texto + respuesta de HC GROUP) se vuelven a pintar en el idioma nuevo
    if (typeof renderReviews === 'function') renderReviews();
    if (typeof syncMobileMenuAria === 'function') syncMobileMenuAria();
  }
  langButtons.forEach(function(btn){
    btn.addEventListener('click', function(){ setLanguage(btn.getAttribute('data-lang')); });
  });
  updateLangButtons();

  /* ---------- AÑO EN FOOTER ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- REPRODUCCIÓN AUTOMÁTICA DEL VIDEO DE PORTADA ---------- */
  var heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.volume = 0;
    var startHeroVideo = function() {
      if (heroVideo.paused) {
        var p = heroVideo.play();
        if (p !== undefined) {
          p.catch(function() {
            var onFirstTouch = function() {
              heroVideo.play().catch(function(){});
              window.removeEventListener('touchstart', onFirstTouch);
              window.removeEventListener('click', onFirstTouch);
              window.removeEventListener('scroll', onFirstTouch);
            };
            window.addEventListener('touchstart', onFirstTouch, { passive: true, once: true });
            window.addEventListener('click', onFirstTouch, { passive: true, once: true });
            window.addEventListener('scroll', onFirstTouch, { passive: true, once: true });
          });
        }
      }
    };
    startHeroVideo();
    document.addEventListener('visibilitychange', function() {
      if (!document.hidden && heroVideo.paused) {
        heroVideo.play().catch(function(){});
      }
    });
  }

  /* ---------- EFECTO "MÁQUINA DE ESCRIBIR" EN "SOLUCIONES INTEGRALES" (H1 del hero) ---------- */
  var twText = document.getElementById('heroTwText');
  var twCursor = document.getElementById('heroTwCursor');
  var twWrap = document.getElementById('heroTwWrap');
  if (twText){
    var twFull = hcT('hero_typed') || twText.getAttribute('data-tw-full') || twText.textContent;

    // Reservamos el ancho exacto de la palabra completa en el contenedor (tw-wrap),
    // así el H1 nunca cambia de ancho ni salta de línea mientras se escribe/borra:
    // el espacio para "soluciones integrales" queda fijo desde el principio.
    function fijarAnchoReservado(){
      if (!twWrap) return;
      var textoOriginal = twText.textContent;
      twWrap.style.width = 'auto'; // quitamos el ancho fijo previo, si lo había, para medir bien
      
      var h1El = twWrap.closest('h1');
      if (h1El) h1El.style.minHeight = 'auto'; // reseteamos el alto antes de medir
      
      twText.textContent = twFull;
      
      // Si estamos en mobile y hace salto de línea, queremos reservar el ALTO del H1
      if (h1El) {
        var h1Alto = h1El.getBoundingClientRect().height;
        h1El.style.minHeight = h1Alto + 'px';
      }
      
      var anchoCompleto = twWrap.getBoundingClientRect().width;
      twWrap.style.width = anchoCompleto + 'px';
      twText.textContent = textoOriginal;
    }
    fijarAnchoReservado();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fijarAnchoReservado);
    }
    // Si la ventana cambia de tamaño (o gira el celular), el texto puede cambiar
    // de tamaño en px por los "clamp()" del CSS: volvemos a medir para que el
    // ancho reservado siga siendo el correcto.
    window.addEventListener('resize', fijarAnchoReservado, { passive:true });

    // Al cambiar de idioma (ES/EN), esto actualiza la palabra que se está
    // escribiendo: el ciclo en curso simplemente sigue con la palabra nueva
    // la próxima vez que empiece a escribir desde cero.
    var refreshHeroTypewriter = function(){
      var nuevaPalabra = hcT('hero_typed');
      if (nuevaPalabra) twFull = nuevaPalabra;
      fijarAnchoReservado();
    };

    if (reduceMotion){
      // Con "reducir movimiento" dejamos el texto fijo y quitamos el cursor parpadeante
      twText.textContent = twFull;
      if (twCursor) twCursor.style.display = 'none';
    } else {
      var twI = 0;
      var twPauseFull = 3000;  // tiempo que se queda la palabra completa antes de borrarse
      var twPauseEmpty = 500;  // tiempo que se queda vacío antes de volver a escribir
      if (twCursor) twCursor.classList.remove('tw-cursor-off');
      function typeNext(){
        if (twI <= twFull.length){
          twText.textContent = twFull.slice(0, twI);
          twI++;
          setTimeout(typeNext, 55 + Math.random() * 55); // ritmo de tecleo levemente irregular
        } else {
          setTimeout(deleteNext, twPauseFull);
        }
      }
      function deleteNext(){
        if (twI > 0){
          twI--;
          twText.textContent = twFull.slice(0, twI);
          setTimeout(deleteNext, 28 + Math.random() * 22); // borra un poco más rápido que escribe
        } else {
          setTimeout(typeNext, twPauseEmpty);
        }
      }
      twText.textContent = '';
      typeNext(); // el efecto arranca y se repite en bucle para siempre (ver deleteNext/typeNext)
    }
  }

  /* ---------- CONTEO ANIMADO DE ESTADÍSTICAS DEL HERO ---------- */
  var heroCounters = document.querySelectorAll('.hero-chips strong[data-count-target]');
  heroCounters.forEach(function(el){
    var target = parseInt(el.getAttribute('data-count-target'), 10);
    var prefix = el.getAttribute('data-count-prefix') || '';
    if (isNaN(target) || el.getAttribute('data-count-static') === 'true' || reduceMotion){
      el.textContent = prefix + (isNaN(target) ? el.textContent : target);
      return;
    }
    var duration = 900, startTime = null;
    function step(ts){
      if (startTime === null) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      el.textContent = prefix + Math.round(progress * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });

  /* ---------- HEADER SOMBRA AL HACER SCROLL ---------- */
  var header = document.getElementById('siteHeader');
  function onScroll(){ if(header) header.classList.toggle('scrolled', window.scrollY > 8); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });

  /* ---------- MENÚ MÓVIL LIGERO (DRAWER CONTENIDO EN HEADER) ---------- */
  var mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
  var mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
  var mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
  var mobileMenuOpen = false;

  function syncMobileMenuAria(){
    if (!mobileMenuTrigger) return;
    mobileMenuTrigger.setAttribute('aria-expanded', String(mobileMenuOpen));
    mobileMenuTrigger.setAttribute('aria-label', hcT(mobileMenuOpen ? 'menu_close' : 'menu_open'));
  }

  function syncDrawerMaxHeight(){
    if (!header || !mobileMenuDrawer) return;
    var rect = header.getBoundingClientRect();
    var bottom = Math.max(0, Math.round(rect.bottom));
    var avail = Math.max(200, window.innerHeight - bottom - 14);
    document.documentElement.style.setProperty('--hc-drawer-max-h', avail + 'px');
  }

  function setMobileMenuState(open, restoreFocus){
    if (!mobileMenuDrawer) return;
    mobileMenuOpen = Boolean(open);
    if (mobileMenuOpen) syncDrawerMaxHeight();
    mobileMenuDrawer.classList.toggle('is-open', mobileMenuOpen);
    mobileMenuDrawer.setAttribute('aria-hidden', String(!mobileMenuOpen));
    if (mobileMenuOpen) {
      mobileMenuDrawer.removeAttribute('inert');
    } else {
      mobileMenuDrawer.setAttribute('inert', '');
    }
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.classList.toggle('is-open', mobileMenuOpen);
    }
    document.documentElement.classList.toggle('mobile-menu-open', mobileMenuOpen);
    document.body.classList.toggle('mobile-menu-open', mobileMenuOpen);
    syncMobileMenuAria();

    if (mobileMenuOpen) {
      var openSearchWrap = document.getElementById('headerSearchWrap');
      var openSearchToggle = document.getElementById('headerSearchToggle');
      if (openSearchWrap && openSearchWrap.classList.contains('is-open')) {
        openSearchWrap.classList.remove('is-open');
        if (openSearchToggle) openSearchToggle.setAttribute('aria-expanded', 'false');
      }
      var firstLink = mobileMenuDrawer.querySelector('.mobile-nav-link');
      if (firstLink) {
        setTimeout(function(){
          if (mobileMenuOpen) {
            try { firstLink.focus({ preventScroll: true }); } catch (e) { firstLink.focus(); }
          }
        }, 40);
      }
    } else if (restoreFocus && mobileMenuTrigger && window.innerWidth <= 980) {
      mobileMenuTrigger.focus();
    }
  }

  if (mobileMenuDrawer) {
    mobileMenuDrawer.setAttribute('inert', '');
    mobileMenuDrawer.setAttribute('aria-hidden', 'true');
  }
  syncMobileMenuAria();

  if (mobileMenuTrigger && mobileMenuDrawer) {
    mobileMenuTrigger.addEventListener('click', function(){
      setMobileMenuState(!mobileMenuOpen, false);
    });
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.addEventListener('click', function(){
        setMobileMenuState(false, true);
      });
    }
    mobileMenuDrawer.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        setMobileMenuState(false, false);
      });
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuState(false, true);
      }
    });
    window.addEventListener('resize', function(){
      if (window.innerWidth > 980 && mobileMenuOpen) {
        setMobileMenuState(false, false);
      } else if (mobileMenuOpen) {
        syncDrawerMaxHeight();
      }
    }, { passive: true });
  }

  /* ---------- REVELADO AL HACER SCROLL ---------- */
  var revealEls = document.querySelectorAll('.unit, .vm-card, .strip-item, .diff-list li, .next-badge, .section-head, .col-body, .commit-inner, .contact-copy, .lead-form, .nf-form-card, .nf-map-card, .nh-intro, .nh-milestone');
  if ('IntersectionObserver' in window && !reduceMotion){
    revealEls.forEach(function(el){ el.classList.add('reveal'); });
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold:0.12 });
    revealEls.forEach(function(el){ io.observe(el); });
  }

  /* ---------- CONTADORES ANIMADOS EN BUCLE (cuenta lenta y reinicia cada 4 segundos al completar) ---------- */
  var countElements = document.querySelectorAll('[data-count-to]');
  if (countElements.length > 0) {
    countElements.forEach(function(el) {
      var targetStr = el.getAttribute('data-count-to');
      var targetVal = targetStr ? parseInt(targetStr, 10) : NaN;
      if (isNaN(targetVal)) return;

      var fromStr = el.getAttribute('data-count-from');
      var fromVal = fromStr ? parseInt(fromStr, 10) : 0;
      var prefix = el.getAttribute('data-count-prefix') || '';
      var suffix = el.getAttribute('data-count-suffix') || '';

      if (reduceMotion || !('IntersectionObserver' in window)) {
        // Con "reducir movimiento" (o si algo no está disponible) dejamos el número fijo, sin animar
        el.textContent = prefix + targetVal + suffix;
        return;
      }

      var isRunning = false;
      var timerId = null;
      var activeInterval = null;

      function runCycle() {
        var currentVal = fromVal;
        var range = targetVal - fromVal;
        if (range <= 0) {
          el.textContent = prefix + targetVal + suffix;
          timerId = setTimeout(runCycle, 4000);
          return;
        }

        var totalDuration = 2800; // Duración lenta de la animación (2.8 segundos)
        var steps = Math.min(range, 60);
        var stepInc = range / steps;
        var stepTime = totalDuration / steps;
        var stepCount = 0;

        el.textContent = prefix + currentVal + suffix;

        if (activeInterval) clearInterval(activeInterval);
        activeInterval = setInterval(function() {
          stepCount++;
          currentVal = Math.round(fromVal + (stepInc * stepCount));

          if (currentVal >= targetVal || stepCount >= steps) {
            currentVal = targetVal;
            el.textContent = prefix + currentVal + suffix;
            clearInterval(activeInterval);
            activeInterval = null;
            // Al completarse, espera 4 segundos y vuelve a cargar la animación
            timerId = setTimeout(runCycle, 4000);
          } else {
            el.textContent = prefix + currentVal + suffix;
          }
        }, stepTime);
      }

      function startCounterLoop() {
        if (isRunning) return;
        isRunning = true;
        runCycle();
      }

      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            startCounterLoop();
          } else {
            if (timerId) clearTimeout(timerId);
            if (activeInterval) clearInterval(activeInterval);
            isRunning = false;
          }
        });
      }, { threshold: 0.2 });

      observer.observe(el);
    });
  }

  /* ---------- BANNER DE COOKIES ---------- */
  var banner = document.getElementById('cookie-banner');
  var waFloat = document.querySelector('.wa-float');
  function adjustWaFloatForBanner(){
    if (waFloat && banner && banner.style.display !== 'none'){
      waFloat.style.bottom = (banner.offsetHeight + 16) + 'px';
    } else if (waFloat){
      waFloat.style.bottom = '';
    }
  }
  if (banner){
    if (!store.get('hc-cookie')) banner.style.display = 'flex';
    adjustWaFloatForBanner();
    window.addEventListener('resize', adjustWaFloatForBanner);
    var accept = document.getElementById('cookie-accept');
    var reject = document.getElementById('cookie-reject');
    if (accept) accept.addEventListener('click', function(){ store.set('hc-cookie','accepted'); banner.style.display='none'; adjustWaFloatForBanner(); });
    if (reject) reject.addEventListener('click', function(){ store.set('hc-cookie','rejected'); banner.style.display='none'; adjustWaFloatForBanner(); });
  }

  /* ---------- FORMULARIO (validación + estado) ---------- */
  /* ---------- MENÚ DESPLEGABLE PERSONALIZADO: "¿Qué unidad necesitas?" ---------- */
  var segmentoWrap = document.getElementById('segmentoCustomSelect');
  var segmentoResetFns = [];
  if (segmentoWrap){
    var segmentoTrigger = document.getElementById('segmentoTrigger');
    var segmentoValueText = document.getElementById('segmentoValueText');
    var segmentoList = document.getElementById('segmentoList');
    var segmentoOptions = segmentoList.querySelectorAll('.custom-select-option');
    var segmentoNativo = document.getElementById('segmento');
    var segmentoPlaceholder = segmentoValueText.textContent;

    function cerrarSegmentoList(){
      segmentoList.hidden = true;
      segmentoTrigger.setAttribute('aria-expanded', 'false');
      segmentoWrap.classList.remove('open');
    }
    function abrirSegmentoList(){
      segmentoList.hidden = false;
      segmentoTrigger.setAttribute('aria-expanded', 'true');
      segmentoWrap.classList.add('open');
    }
    segmentoTrigger.addEventListener('click', function(){
      if (segmentoList.hidden) abrirSegmentoList(); else cerrarSegmentoList();
    });
    segmentoOptions.forEach(function(opt){
      opt.addEventListener('click', function(){
        var valor = opt.getAttribute('data-value');
        segmentoValueText.textContent = opt.textContent;
        segmentoValueText.classList.remove('placeholder');
        segmentoNativo.value = valor;
        segmentoNativo.classList.remove('invalid');
        segmentoTrigger.classList.remove('invalid');
        segmentoOptions.forEach(function(o){ o.classList.remove('selected'); o.setAttribute('aria-selected', 'false'); });
        opt.classList.add('selected');
        opt.setAttribute('aria-selected', 'true');
        segmentoNativo.dispatchEvent(new Event('change', { bubbles:true }));
        cerrarSegmentoList();
      });
    });
    document.addEventListener('click', function(e){
      if (!segmentoWrap.contains(e.target)) cerrarSegmentoList();
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') cerrarSegmentoList();
    });
    // Al resetear el formulario (tras un envío exitoso), este menú
    // también debe volver a mostrar "Selecciona una opción".
    segmentoResetFns.push(function(){
      segmentoValueText.textContent = segmentoPlaceholder;
      segmentoValueText.classList.add('placeholder');
      segmentoOptions.forEach(function(o){ o.classList.remove('selected'); o.setAttribute('aria-selected', 'false'); });
      cerrarSegmentoList();
    });
  }

  var form = document.getElementById('leadForm');
  var status = document.getElementById('formStatus');
  function isEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  if (form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // Anti-spam: si el campo trampa está lleno, lo envió un bot -> ignorar
      if (form.empresa_web && form.empresa_web.value.trim() !== ''){ return; }
      status.className = 'form-status';
      status.textContent = '';
      var nombre = form.nombre, email = form.email, segmento = form.segmento;
      [nombre, email, segmento].forEach(function(f){ f.classList.remove('invalid'); });
      var segmentoTriggerEl = document.getElementById('segmentoTrigger');
      if (segmentoTriggerEl) segmentoTriggerEl.classList.remove('invalid');

      var ok = true;
      if (!nombre.value.trim()){ nombre.classList.add('invalid'); ok = false; }
      if (!isEmail(email.value.trim())){ email.classList.add('invalid'); ok = false; }
      if (!segmento.value){
        segmento.classList.add('invalid');
        if (segmentoTriggerEl) segmentoTriggerEl.classList.add('invalid');
        ok = false;
      }

      if (!ok){
        status.className = 'form-status error';
        status.textContent = hcT('form_error_fields');
        return;
      }
      var prefijo = form.prefijo, telefono = form.telefono, mensaje = form.mensaje;
      var unidadTexto = segmento.options[segmento.selectedIndex].text;
      var telefonoCompleto = telefono.value.trim() ? (prefijo.value + ' ' + telefono.value.trim()) : hcT('mail_no_phone');

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      // El formulario ya NO abre el correo: solo guarda la solicitud
      // en Google Sheets (pestaña "Solicitudes contacto").
      guardarContactoEnGoogleSheets({
        nombre: nombre.value.trim(),
        email: email.value.trim(),
        telefono: telefonoCompleto,
        unidad: unidadTexto,
        mensaje: mensaje.value.trim()
      });

      // Modal de 2 pasos: "enviando sus datos" y luego "listo".
      // Sobrescribimos el texto del paso 1 solo para este formulario (el
      // formulario de catálogo del footer usa el mismo modal, pero sí abre
      // el correo, así que mantiene su propio texto "Redirigiendo a su correo…").
      var loadingTitleEl = document.querySelector('#redirectModalLoadingStep p');
      var loadingSubEl = document.querySelector('#redirectModalLoadingStep .redirect-modal-sub');
      if (loadingTitleEl) loadingTitleEl.textContent = hcT('lead_sending_title');
      if (loadingSubEl) loadingSubEl.textContent = hcT('lead_sending_sub');
      showRedirectModal();
      setTimeout(function(){
        showRedirectModalDone();
        setTimeout(hideRedirectModal, 3000);
      }, 3000);

      setTimeout(function(){
        if (submitBtn) submitBtn.disabled = false;
        form.reset();
        segmentoResetFns.forEach(function(fn){ fn(); });
      }, 1100);
    });
  }

  /* ---------- ENLACES "PORTAL" (ahora abren el portal de clientes externo en pestaña nueva) ---------- */

  /* ---------- SINCRONIZAR LOGO ---------- */
  var shopLogo = document.getElementById('shopLogo');
  var headerLogo = document.querySelector('.site-header .brand img');
  if (shopLogo && headerLogo && shopLogo !== headerLogo) shopLogo.src = headerLogo.src;


  /* ---------- FORMULARIO "SOLICITA TU CATÁLOGO" (footer) ---------- */
  // URL de la aplicación web de Google Apps Script (ver archivo CatalogoHCGROUP.gs)
  var GOOGLE_SHEETS_ENDPOINT_URL = 'https://script.google.com/macros/s/AKfycbxdrDuVRyS3Reh6NXRFg7zlgLeFogGgCok3rozmXsat8HkopItD000-dvN4guBnF0k/exec';

  var footerCatalogForm = document.getElementById('footerCatalogForm');
  var footerCatalogSubmitBtn = footerCatalogForm ? footerCatalogForm.querySelector('.footer-catalog-submit') : null;
  var redirectModalOverlay = document.getElementById('redirectModalOverlay');
  var redirectModalLoadingStep = document.getElementById('redirectModalLoadingStep');
  var redirectModalDoneStep = document.getElementById('redirectModalDoneStep');
  function showRedirectModal(){
    if (!redirectModalOverlay) return;
    if (redirectModalLoadingStep) redirectModalLoadingStep.hidden = false;
    if (redirectModalDoneStep) redirectModalDoneStep.hidden = true;
    redirectModalOverlay.classList.add('open');
  }
  function showRedirectModalDone(){
    if (!redirectModalOverlay) return;
    if (redirectModalLoadingStep) redirectModalLoadingStep.hidden = true;
    if (redirectModalDoneStep) redirectModalDoneStep.hidden = false;
  }
  function hideRedirectModal(){
    if (!redirectModalOverlay) return;
    redirectModalOverlay.classList.remove('open');
  }
  if (redirectModalOverlay){
    redirectModalOverlay.addEventListener('click', function(e){
      if (e.target === redirectModalOverlay) hideRedirectModal();
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') hideRedirectModal();
    });
  }
  function guardarEnGoogleSheets(email){
    var url = GOOGLE_SHEETS_ENDPOINT_URL;
    if (!url || url.indexOf('PEGA_AQUI_TU_URL') !== -1 || typeof fetch !== 'function') return;
    try {
      fetch(url, {
        method: 'POST',
        mode: 'no-cors', // Apps Script no permite leer la respuesta desde otro origen;
                          // esto solo envía los datos "a ciegas", que es lo que necesitamos.
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          tipo: 'catalogo',
          email: email,
          origen: 'Formulario "Solicita su catálogo" (footer del sitio)'
        })
      }).catch(function(){
        // Error de red o de política de seguridad al guardar en la hoja:
        // no interrumpe el flujo del mailto, que ya sigue su curso solo.
      });
    } catch (err){
      // Si falla el guardado en la hoja, no interrumpe el flujo del mailto
    }
  }

  // Guarda una solicitud del formulario de contacto ("Solicita tu acceso")
  // en la pestaña "Solicitudes contacto" de Google Sheets.
  function guardarContactoEnGoogleSheets(datos){
    var url = GOOGLE_SHEETS_ENDPOINT_URL;
    if (!url || url.indexOf('PEGA_AQUI_TU_URL') !== -1 || typeof fetch !== 'function') return;
    try {
      fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          tipo: 'contacto',
          nombre: datos.nombre,
          email: datos.email,
          telefono: datos.telefono,
          unidad: datos.unidad,
          mensaje: datos.mensaje
        })
      }).catch(function(){
        // Error de red o de política de seguridad al guardar en la hoja:
        // no interrumpe el flujo del mailto, que ya sigue su curso solo.
      });
    } catch (err){
      // Si falla el guardado en la hoja, no interrumpe el flujo del mailto
    }
  }

  /* ---------- RESEÑAS EN GOOGLE SHEETS (base de datos compartida) ---------- */
  // Guarda una reseña nueva en la hoja "Reseñas" (además de mostrarla ya mismo
  // en este navegador, para que la persona vea su reseña al instante).
  // Guarda una reseña en Google Sheets y devuelve una Promise que se
  // resuelve cuando el envío efectivamente terminó (o fallÓ). A diferencia
  // de un simple "dispara y olvida", esto nos permite saber con certeza
  // que los datos (incluida la foto) salieron del navegador antes de
  // avisarle a la persona que su reseña quedó guardada.
  function enviarResenaAGoogleSheets(resena){
    var url = GOOGLE_SHEETS_ENDPOINT_URL;
    if (!url || url.indexOf('PEGA_AQUI_TU_URL') !== -1 || typeof fetch !== 'function') {
      return Promise.resolve();
    }
    var targetUrl = url;
    if (targetUrl.indexOf('accion=') === -1) {
      targetUrl += (targetUrl.indexOf('?') === -1 ? '?' : '&') + 'accion=guardarResena';
    }
    var payload = {
      accion: 'guardarResena',
      tipo: 'resena',
      datos: {
        nombre: resena.name || '',
        calificacion: resena.rating || 5,
        comentario: resena.text || '',
        fecha: resena.date || '',
        foto: resena.photo || ''
      },
      nombre: resena.name || '',
      calificacion: resena.rating || 5,
      comentario: resena.text || '',
      fecha: resena.date || '',
      foto: resena.photo || ''
    };
    return fetch(targetUrl, {
      method: 'POST',
      mode: 'no-cors', // Apps Script no permite leer la respuesta desde otro origen;
                        // igual podemos "esperar" a que el envío termine.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });
  }

  // Al cargar la página, trae las reseñas guardadas en Google Sheets (las de
  // TODOS los visitantes, no solo las de este navegador) y las muestra.
  // Si por lo que sea no se puede leer la hoja (sin conexión, URL sin
  // configurar, etc.), el sitio sigue mostrando las reseñas de ejemplo/locales
  // sin romperse.
  function cargarResenasDesdeGoogleSheets(){
    var url = GOOGLE_SHEETS_ENDPOINT_URL;
    if (!url || url.indexOf('PEGA_AQUI_TU_URL') !== -1 || typeof fetch !== 'function') return;
    fetch(url + (url.indexOf('?') === -1 ? '?' : '&') + 'accion=resenas')
      .then(function(res){ return res.json(); })
      .then(function(data){
        var isOk = data && (data.ok === true || data.success === true);
        if (!isOk || !Array.isArray(data.resenas) || !data.resenas.length) return;
        reviews = data.resenas;
        saveReviews();
        renderReviews();
        if (typeof rvBuildDots === 'function'){ rvBuildDots(); rvGo(0); }
      })
      .catch(function(err){
        // Sin conexión con la hoja: nos quedamos con las reseñas locales/de ejemplo
      });
  }
  cargarResenasDesdeGoogleSheets();

  // Igual que las reseñas: si la hoja "Equipo" tiene integrantes activos,
  // reemplazamos las tarjetas de ejemplo por las reales. Si falla (sin
  // conexión, hoja vacía, endpoint no configurado, etc.), el carrusel se
  // queda con las tarjetas que ya trae el sitio — nunca queda vacío.
  function cargarEquipoDesdeGoogleSheets(){
    var url = GOOGLE_SHEETS_ENDPOINT_URL;
    if (!url || url.indexOf('PEGA_AQUI_TU_URL') !== -1 || typeof fetch !== 'function') return;
    fetch(url + (url.indexOf('?') === -1 ? '?' : '&') + 'accion=equipo')
      .then(function(res){ return res.json(); })
      .then(function(data){
        var isOk = data && (data.ok === true || data.success === true);
        if (!isOk || !Array.isArray(data.equipo) || !data.equipo.length) return;
        if (typeof window.hcRenderEquipoDesdeSheets === 'function') window.hcRenderEquipoDesdeSheets(data.equipo);
      })
      .catch(function(err){
        // Sin conexión con la hoja: nos quedamos con el equipo de ejemplo del sitio
      });
  }
  cargarEquipoDesdeGoogleSheets();

  function handleCatalogRequest(){
    // Anti-spam: si el campo trampa está lleno, lo envió un bot -> ignorar en silencio
    var trampaCatalogo = document.getElementById('catalogo_web');
    if (trampaCatalogo && trampaCatalogo.value.trim() !== ''){ return; }
    var emailField = document.getElementById('footerCatalogEmail');
    var email = emailField ? emailField.value.trim() : '';
    var isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail){
      if (emailField){
        emailField.classList.add('field-error');
        emailField.focus();
        emailField.addEventListener('input', function clearError(){
          emailField.classList.remove('field-error');
          emailField.removeEventListener('input', clearError);
        });
      }
      return;
    }
    guardarEnGoogleSheets(email);
    var subject = encodeURIComponent('Solicitud de catálogo — HC GROUP');
    var body = encodeURIComponent('Hola, me gustaría solicitar el catálogo de equipos médicos y soluciones de HC GROUP.\nMi correo de contacto es: ' + email + '.\nQuedo atento/a, gracias.');
    var mailtoLink = 'mailto:gerencia@hcgrouplatam.com?subject=' + subject + '&body=' + body;
    // Modal de 2 pasos: "cargando" 3 segundos, luego "listo" (con el
    // logo de HC GROUP) otros 3 segundos, y recién ahí se abre el correo.
    // Reafirmamos el texto original de este modal (por si el formulario
    // de contacto lo sobrescribió antes en la misma sesión).
    var catLoadingTitleEl = document.querySelector('#redirectModalLoadingStep p');
    var catLoadingSubEl = document.querySelector('#redirectModalLoadingStep .redirect-modal-sub');
    if (catLoadingTitleEl) catLoadingTitleEl.textContent = hcT('redirect_title');
    if (catLoadingSubEl) catLoadingSubEl.textContent = hcT('redirect_sub');
    showRedirectModal();
    setTimeout(function(){
      showRedirectModalDone();
      window.location.href = mailtoLink;
      setTimeout(hideRedirectModal, 3000);
    }, 3000);
  }
  if (footerCatalogForm){
    footerCatalogForm.addEventListener('submit', function(e){
      e.preventDefault();
      handleCatalogRequest();
    });
  }
  // Respaldo: si por lo que sea el evento "submit" del formulario no se disparara
  // en el navegador de la persona, el clic directo en el botón igual funciona
  if (footerCatalogSubmitBtn){
    footerCatalogSubmitBtn.addEventListener('click', function(e){
      e.preventDefault();
      handleCatalogRequest();
    });
  }

  /* ---------- ENLACES "PRÓXIMAMENTE" (sin destino aún, p.ej. redes sociales/noticias) ---------- */
  var soonToast = document.createElement('div');
  soonToast.className = 'soon-toast';
  soonToast.setAttribute('role', 'status');
  soonToast.setAttribute('aria-live', 'polite');
  document.body.appendChild(soonToast);
  var soonTimer;
  function showSoonToast(msg){
    soonToast.textContent = msg;
    soonToast.classList.add('show');
    clearTimeout(soonTimer);
    soonTimer = setTimeout(function(){ soonToast.classList.remove('show'); }, 2600);
  }
  document.querySelectorAll('[data-soon]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      showSoonToast(hcT('toast_working'));
    });
  });

  /* ---------- CLONAR LOGOS DE MARCAS A LA SECCIÓN "MARCAS CON LAS QUE TRABAJAMOS" ---------- */
  document.querySelectorAll('[data-partner-brand]').forEach(function(img){
    var brand = img.getAttribute('data-partner-brand');
    var source = document.querySelector('.brands-list .brand-chip[data-brand="' + brand + '"] img');
    if (source) img.src = source.src;
  });

  /* ---------- MAPA DE UBICACIÓN (Leaflet + OpenStreetMap) ---------- */
  var mapEl = document.getElementById('hcMap');
  if (mapEl && window.L){
    try {
      var hcCoords = [12.1373625, -86.284015625];
      var hcMap = L.map('hcMap', {
        scrollWheelZoom: false,
        minZoom: 14,
        maxZoom: 18
      }).setView(hcCoords, 17);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        detectRetina: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
      }).addTo(hcMap);
      // Pin propio en SVG (autocontenido): evita depender del ícono por defecto de Leaflet,
      // cuya ruta de imagen relativa puede no resolver bien según el CDN y se ve roto.
      var hcPinIcon = L.divIcon({
        className: 'hc-map-pin',
        html: '<div class="hc-pin-shadow"></div>' +
              '<div class="hc-pin-body">' +
                '<svg class="hc-pin-shape" width="34" height="44" viewBox="0 0 34 44" xmlns="http://www.w3.org/2000/svg">' +
                  '<path d="M17 0C7.6 0 0 7.6 0 17c0 12.75 17 27 17 27s17-14.25 17-27C34 7.6 26.4 0 17 0z" fill="#0E70B6"/>' +
                  '<circle cx="17" cy="17" r="10.5" fill="#fff"/>' +
                '</svg>' +
                '<img class="hc-pin-logo" width="19" height="19" style="position:absolute;top:7px;left:50%;width:19px;height:auto;transform:translateX(-50%);pointer-events:none;" src="data:image/png;base64,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" alt="HC GROUP" />' +
              '</div>',
        iconSize: [34, 44],
        iconAnchor: [17, 44],
        popupAnchor: [0, -38]
      });
      var hcMarker = L.marker(hcCoords, { icon: hcPinIcon }).addTo(hcMap)
        .bindPopup('<strong>HC GROUP</strong><br>SINSA HOME, Managua')
        .openPopup();
      // Reactivar el zoom con rueda solo cuando el usuario hace clic en el mapa (evita "atrapar" el scroll de la página)
      mapEl.addEventListener('click', function(){ hcMap.scrollWheelZoom.enable(); });
      mapEl.addEventListener('mouseleave', function(){ hcMap.scrollWheelZoom.disable(); });
      // Forzar que Leaflet recalcule el tamaño del contenedor: evita mosaicos cortados/borrosos
      // cuando las fuentes web, imágenes o animaciones de "reveal" cambian el layout después
      // de que el mapa ya se inicializó (causa muy común de que el mapa se vea "poco claro").
      function hcRefreshMap(){
        hcMap.invalidateSize();
        hcMap.setView(hcCoords, hcMap.getZoom());
      }
      setTimeout(hcRefreshMap, 300);
      window.addEventListener('load', hcRefreshMap);
      window.addEventListener('resize', hcRefreshMap);
      if ('ResizeObserver' in window){
        new ResizeObserver(function(){ hcMap.invalidateSize(); }).observe(mapEl);
      }
      if ('IntersectionObserver' in window){
        var hcMapObs = new IntersectionObserver(function(entries){
          entries.forEach(function(entry){
            if (entry.isIntersecting){ hcRefreshMap(); hcMapObs.disconnect(); }
          });
        }, { threshold: 0.2 });
        hcMapObs.observe(mapEl);
      }
    } catch (err){
      mapEl.style.display = 'none';
    }
  } else if (mapEl){
    mapEl.style.display = 'none';
  }

  /* ---------- BUSCADOR EN HEADER (ESTILO PROMED) ---------- */
  var searchToggle = document.getElementById('headerSearchToggle');
  var searchWrap = document.getElementById('headerSearchWrap');
  if (searchToggle && searchWrap) {
    searchToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      var isOpen = searchWrap.classList.toggle('is-open');
      searchToggle.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        if (mobileMenuOpen) setMobileMenuState(false, false);
        var inp = searchWrap.querySelector('input');
        if (inp) inp.focus();
      }
    });
    searchWrap.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    document.addEventListener('click', function() {
      searchWrap.classList.remove('is-open');
      searchToggle.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        searchWrap.classList.remove('is-open');
        searchToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- BUSCADOR (decorativo) ---------- */
  var shopSearch = document.getElementById('shopSearch');
  if (shopSearch){
    shopSearch.addEventListener('submit', function(e){
      e.preventDefault();
      var c = document.getElementById('contacto');
      if (c) c.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- VENTANA EMERGENTE (BOLETÍN) ---------- */
  var pop = document.getElementById('newsletterPop');
  var popClose = document.getElementById('popClose');
  var popForm = document.getElementById('popForm');
  var popMsg = document.getElementById('popMsg');
  function openPop(){ if(pop){ pop.classList.add('open'); pop.setAttribute('aria-hidden','false'); } }
  function closePop(){ if(pop){ pop.classList.remove('open'); pop.setAttribute('aria-hidden','true'); } }
  if (pop && !store.get('hc-newsletter')){
    setTimeout(openPop, 1500);
  }
  if (popClose) popClose.addEventListener('click', function(){ store.set('hc-newsletter','closed'); closePop(); });
  if (pop) pop.addEventListener('click', function(e){ if(e.target === pop){ store.set('hc-newsletter','closed'); closePop(); } });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape' && pop && pop.classList.contains('open')){ store.set('hc-newsletter','closed'); closePop(); } });
  if (popForm){
    popForm.addEventListener('submit', function(e){
      e.preventDefault();
      var email = popForm.email.value.trim();
      if (!isEmail(email)){
        popMsg.className = 'pop-msg';
        popMsg.style.color = '#ffd9d9';
        popMsg.textContent = 'Escribe un correo válido.';
        return;
      }
      var popSubmitBtn = popForm.querySelector('button[type="submit"]');
      if (popSubmitBtn) popSubmitBtn.disabled = true;
      popMsg.style.color = '';
      popMsg.className = 'pop-msg';
      popMsg.innerHTML = '<span class="fs-spinner"></span><span class="fs-text">Enviando su suscripción…</span>';

      setTimeout(function(){
        popMsg.innerHTML = '<span class="fs-check"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span><span class="fs-text">¡Listo!<span>Te mantendremos al tanto de nuestras novedades.</span></span>';
        store.set('hc-newsletter','subscribed');
        popForm.reset();
        if (popSubmitBtn) popSubmitBtn.disabled = false;
        setTimeout(closePop, 1800);
      }, 1100);
    });
  }

  /* ---------- BURBUJA WHATSAPP ---------- */
  var waBubbleClose = document.getElementById('waBubbleClose');
  var waBubble = document.getElementById('waBubble');
  if (waBubbleClose && waBubble){
    waBubbleClose.addEventListener('click', function(e){ e.preventDefault(); waBubble.style.display = 'none'; });
  }

  /* ---------- RESEÑAS ---------- */
  var reviewList = document.getElementById('reviewList');
  var reviews = (function(){
    var saved = store.get('hc-reviews');
    if (saved){
      try { var parsed = JSON.parse(saved); if (Array.isArray(parsed) && parsed.length) return parsed; } catch(e){}
    }
    return [
    {
      name: 'Marlene G.', verified: true, date: '3/2/2026', rating: 5,
      textKey: 'review1_text', replyKey: 'review1_reply'
    },
    {
      name: 'Carlos M.', verified: true, date: '18/1/2026', rating: 5,
      textKey: 'review2_text', replyKey: 'review2_reply'
    },
    {
      name: 'Fernanda R.', verified: true, date: '22/12/2025', rating: 4,
      textKey: 'review3_text', replyKey: 'review3_reply'
    }
    ];
  })();
  function saveReviews(){ try { store.set('hc-reviews', JSON.stringify(reviews)); } catch(e){} }

  function starSvg(on){
    return '<svg viewBox="0 0 24 24" class="' + (on ? 'star-on' : 'star-off') + '"><path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.1 20.9l1.1-6.5L2.5 9.8l6.5-.9z"/></svg>';
  }
  function starsRow(rating){
    var s = '';
    for (var i=1;i<=5;i++) s += starSvg(i<=rating);
    return s;
  }
  function esc(str){ var d=document.createElement('div'); d.textContent=str; return d.innerHTML; }
  function renderReviews(){
    if (!reviewList) return;
    reviewList.innerHTML = reviews.map(function(r, idx){
      var reviewText = r.textKey ? hcT(r.textKey) : r.text;
      var replyText = r.replyKey ? hcT(r.replyKey) : r.reply;
      var initial = esc((r.name || 'A')[0].toUpperCase());
      var avatar = r.photo
        ? '<div class="rc-avatar"><img src="' + esc(r.photo) + '" alt=""  /></div>'
        : '<div class="rc-avatar">' + initial + '</div>';
      var brandLogo = document.querySelector(".site-header .brand img");
      var logoSrc = brandLogo ? brandLogo.src : "";
      var replyIconHtml = logoSrc 
        ? '<img src="' + logoSrc + '" alt="HC GROUP" style="width: 100%; height: 100%; object-fit: contain; border-radius: 50%; background: #fff;" />'
        : '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>';

      var reply = replyText ? (
        '<div class="rc-reply">' +
          '<div class="rc-reply-icon" style="' + (logoSrc ? 'background: transparent; border: 1px solid #e2e8f0;' : '') + '">' + replyIconHtml + '</div>' +
          '<div class="rc-reply-body"><strong>HC GROUP</strong><p>' + esc(replyText) + '</p></div>' +
        '</div>'
      ) : '';
      var verified = r.verified ? (
        '<span class="rc-verified"><svg viewBox="0 0 24 24"><path d="M12 2l2.4 2.1 3.1-.5 1 3 2.9 1.3-1 3 1 3-2.9 1.3-1 3-3.1-.5L12 22l-2.4-2.1-3.1.5-1-3L2.6 15.5l1-3-1-3 2.9-1.3 1-3 3.1.5z" fill="currentColor" stroke="none"/><path d="M8.5 12l2.2 2.2 4.3-4.3" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' + hcT('review_verified') + '</span>'
      ) : '';
      return '<article class="review-card">' +
        '<button type="button" class="rc-hide" data-hide-idx="' + idx + '" aria-label="' + hcT('review_hide_aria') + '" title="' + hcT('review_hide_aria') + '">&times;</button>' +
        '<div class="rc-quote-mark">&#8220;</div>' +
        '<div class="rc-stars">' + starsRow(r.rating) + '</div>' +
        '<p class="rc-text">' + esc(reviewText) + '</p>' +
        '<div class="rc-author">' + avatar +
          '<div class="rc-meta">' +
            '<div class="rc-name-row"><span class="rc-name">' + esc(r.name) + '</span>' + verified + '</div>' +
            '<div class="rc-date">' + esc(r.date) + '</div>' +
          '</div>' +
        '</div>' +
        reply +
      '</article>';
    }).join('');

    // Botón "ocultar" de cada reseña: la quita de este navegador (no de un servidor,
    // porque este sitio no tiene backend — cada visitante guarda su propia copia).
    reviewList.querySelectorAll('.rc-hide').forEach(function(btn){
      btn.addEventListener('click', function(){
        var idx = parseInt(btn.getAttribute('data-hide-idx'), 10);
        if (isNaN(idx)) return;
        reviews.splice(idx, 1);
        saveReviews();
        renderReviews();
        if (typeof rvBuildDots === 'function'){ rvBuildDots(); rvGo(0); }
      });
    });

    // resumen: promedio + conteo
    var avg = Math.round(reviews.reduce(function(a,r){ return a + r.rating; }, 0) / reviews.length);
    var avgStars = document.getElementById('avgStars');
    var countBtn = document.getElementById('reviewsCount');
    if (avgStars) avgStars.innerHTML = starsRow(avg);
    if (countBtn) countBtn.textContent = reviews.length + ' ' + (reviews.length === 1 ? hcT('review_singular') : hcT('review_plural')) + ' ▾';
  }
  renderReviews();

  /* ---------- CARRUSEL DE RESEÑAS (una reseña a la vez) ---------- */
  var rvCarousel = document.getElementById('reviewsCarousel');
  var rvDotsWrap = document.getElementById('reviewDots');
  var rvIndex = 0;
  function rvSlides(){ return reviewList ? reviewList.querySelectorAll('.review-card') : []; }
  function rvBuildDots(){
    if (!rvDotsWrap) return;
    rvDotsWrap.innerHTML = '';
    rvSlides().forEach(function(_, k){
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'car-dot';
      b.setAttribute('aria-label', hcT('review_view_aria_prefix') + ' ' + (k+1));
      b.addEventListener('click', function(){ rvGo(k); });
      rvDotsWrap.appendChild(b);
    });
  }
  function rvGo(n){
    var s = rvSlides();
    if (!s.length || !reviewList) return;
    rvIndex = (n + s.length) % s.length;
    reviewList.style.transition = 'transform 0.55s cubic-bezier(0.22, 0.8, 0.26, 1)';
    reviewList.style.transform = 'translateX(' + (-rvIndex*100) + '%)';
    if (rvDotsWrap) rvDotsWrap.querySelectorAll('button').forEach(function(d,k){ d.classList.toggle('on', k === rvIndex); });
  }
  if (rvCarousel){
    var rvPrev = rvCarousel.querySelector('[data-rv-prev]');
    var rvNext = rvCarousel.querySelector('[data-rv-next]');
    if (rvPrev) rvPrev.addEventListener('click', function(){ rvGo(rvIndex-1); });
    if (rvNext) rvNext.addEventListener('click', function(){ rvGo(rvIndex+1); });

    var rvVp = rvCarousel.querySelector('.carousel-viewport');
    if (rvVp) {
      var rvx=0, rdx=0, rmoved=false;
      rvVp.addEventListener('touchstart', function(e){ rvx=e.touches[0].clientX; rdx=0; rmoved=false; reviewList.style.transition='none'; }, {passive:true});
      rvVp.addEventListener('touchmove', function(e){ 
        rdx=e.touches[0].clientX - rvx; 
        if(Math.abs(rdx)>10) rmoved=true; 
        if(rmoved){
          var shift = (rdx / rvVp.getBoundingClientRect().width) * 100;
          reviewList.style.transform = 'translateX(' + (-rvIndex*100 + shift) + '%)';
        }
      }, {passive:true});
      rvVp.addEventListener('touchend', function(){ 
        reviewList.style.transition='';
        if(rmoved){ 
          if(rdx<-40) rvGo(rvIndex+1); 
          else if(rdx>40) rvGo(rvIndex-1); 
          else rvGo(rvIndex);
        } 
      });
      rvVp.addEventListener('touchcancel', function(){ reviewList.style.transition=''; rvGo(rvIndex); });
    }
  }
  rvBuildDots(); rvGo(0);

  /* ---------- BOTÓN FILTRO: mostrar/ocultar el carrusel de reseñas ---------- */
  var rvFilterToggle = document.getElementById('rvFilterToggle');
  if (rvFilterToggle && rvCarousel){
    rvFilterToggle.addEventListener('click', function(){
      var hidden = rvCarousel.classList.toggle('is-hidden');
      rvFilterToggle.setAttribute('aria-pressed', String(hidden));
      rvFilterToggle.classList.toggle('active', hidden);
    });
  }

  // Selector de estrellas del formulario
  var pickedRating = 5;
  var starPick = document.getElementById('rvStarPick');
  function paintPick(){
    if (!starPick) return;
    starPick.querySelectorAll('svg').forEach(function(svg, i){
      svg.setAttribute('class', (i+1) <= pickedRating ? 'star-on' : 'star-off');
    });
  }
  if (starPick){
    for (var i=1;i<=5;i++){
      (function(val){
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', val + ' de 5');
        b.innerHTML = '<svg viewBox="0 0 24 24" class="star-on"><path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.1 20.9l1.1-6.5L2.5 9.8l6.5-.9z"/></svg>';
        b.addEventListener('click', function(){ pickedRating = val; paintPick(); });
        starPick.appendChild(b);
      })(i);
    }
    paintPick();
  }

  // Abrir/cerrar el modal "Comparta su experiencia"
  var reviewForm = document.getElementById('reviewForm');
  var openReviewForm = document.getElementById('openReviewForm');
  var cancelReview = document.getElementById('cancelReview');
  var reviewModalOverlay = document.getElementById('reviewModalOverlay');
  var reviewModalClose = document.getElementById('reviewModalClose');
  var reviewModalFormStep = document.getElementById('reviewModalFormStep');
  var reviewModalLoadingStep = document.getElementById('reviewModalLoadingStep');
  var reviewModalDoneStep = document.getElementById('reviewModalDoneStep');
  var reviewModalDoneClose = document.getElementById('reviewModalDoneClose');

  function mostrarPasoModalResena(paso){
    // "paso" es uno de: 'form' | 'cargando' | 'listo'
    if (reviewModalFormStep) reviewModalFormStep.hidden = (paso !== 'form');
    if (reviewModalLoadingStep) reviewModalLoadingStep.hidden = (paso !== 'cargando');
    if (reviewModalDoneStep) reviewModalDoneStep.hidden = (paso !== 'listo');
  }
  function abrirModalResena(){
    if (!reviewModalOverlay) return;
    mostrarPasoModalResena('form'); // siempre arrancamos en el formulario
    reviewModalOverlay.classList.add('open');
    var n = document.getElementById('rvName');
    if (n) setTimeout(function(){ n.focus(); }, 150);
  }
  function cerrarModalResena(){
    if (!reviewModalOverlay) return;
    reviewModalOverlay.classList.remove('open');
  }
  if (openReviewForm){
    openReviewForm.addEventListener('click', abrirModalResena);
  }
  if (cancelReview){
    cancelReview.addEventListener('click', cerrarModalResena);
  }
  if (reviewModalClose){
    reviewModalClose.addEventListener('click', cerrarModalResena);
  }
  if (reviewModalDoneClose){
    reviewModalDoneClose.addEventListener('click', cerrarModalResena);
  }
  if (reviewModalOverlay){
    // Clic fuera de la tarjeta = cerrar (pero no mientras se está enviando)
    reviewModalOverlay.addEventListener('click', function(e){
      if (e.target === reviewModalOverlay && (!reviewModalLoadingStep || reviewModalLoadingStep.hidden)) cerrarModalResena();
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && (!reviewModalLoadingStep || reviewModalLoadingStep.hidden)) cerrarModalResena();
    });
  }


  // Selector de foto (opcional) en el modal de reseñas
  var rvPhotoInput = document.getElementById('rvPhotoInput');
  var rvPhotoSelectBtn = document.getElementById('rvPhotoSelectBtn');
  var rvPhotoPreview = document.getElementById('rvPhotoPreview');
  var rvPhotoImg = document.getElementById('rvPhotoImg');
  var rvPhotoRemoveBtn = document.getElementById('rvPhotoRemoveBtn');
  var photoBase64Data = '';

  function limpiarFotoResena(){
    photoBase64Data = '';
    if (rvPhotoInput) rvPhotoInput.value = '';
    if (rvPhotoImg) rvPhotoImg.src = '';
    if (rvPhotoPreview) rvPhotoPreview.style.display = 'none';
    if (rvPhotoSelectBtn) rvPhotoSelectBtn.style.display = 'inline-flex';
  }

  if (rvPhotoSelectBtn && rvPhotoInput) {
    rvPhotoSelectBtn.addEventListener('click', function() {
      rvPhotoInput.click();
    });

    rvPhotoInput.addEventListener('change', function() {
      var file = rvPhotoInput.files && rvPhotoInput.files[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
          photoBase64Data = e.target.result;
          if (rvPhotoImg) rvPhotoImg.src = photoBase64Data;
          if (rvPhotoSelectBtn) rvPhotoSelectBtn.style.display = 'none';
          if (rvPhotoPreview) rvPhotoPreview.style.display = 'flex';
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (rvPhotoRemoveBtn) {
    rvPhotoRemoveBtn.addEventListener('click', function() {
      limpiarFotoResena();
    });
  }

  // Enviar nueva reseña: se manda a Google Sheets como PENDIENTE de
  // aprobación. No se agrega a la lista visible de este navegador,
  // porque todavía no está publicada — solo aparecerá en el sitio
  // (para todo el mundo) una vez que se marque como "Publicada" en
  // la hoja de cálculo.
  if (reviewForm){
    reviewForm.addEventListener('submit', function(e){
      e.preventDefault();
      // Anti-spam: si el campo trampa está lleno, lo envió un bot -> ignorar en silencio
      var trampaResena = document.getElementById('resena_web');
      if (trampaResena && trampaResena.value.trim() !== ''){ return; }
      var name = document.getElementById('rvName').value.trim();
      var text = document.getElementById('rvText').value.trim();
      if (!name || !text) return;

      // Mostramos el paso de "enviando" de inmediato, y lo dejamos
      // como mínimo 3 segundos (pedido explícitamente), aunque el
      // envío real termine antes.
      mostrarPasoModalResena('cargando');
      var inicio = Date.now();
      var TIEMPO_MINIMO_CARGA_MS = 3000;

      var now = new Date();
      var fecha = now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear();
      var nuevaResena = { name: name, date: fecha, rating: pickedRating, text: text, photo: photoBase64Data };

      // La guardamos en Google Sheets (pendiente de aprobación); el
      // propio Apps Script decide si queda visible o no en el sitio.
      // Esperamos a que el envío termine (o falle) antes de continuar.
      enviarResenaAGoogleSheets(nuevaResena).catch(function(){
        // Si algo falla en el camino, igual seguimos: la persona ya
        // completó su parte y no debe quedarse esperando indefinidamente.
      }).then(function(){
        var transcurrido = Date.now() - inicio;
        var faltante = Math.max(0, TIEMPO_MINIMO_CARGA_MS - transcurrido);
        setTimeout(function(){
          reviewForm.reset();
          limpiarFotoResena();
          pickedRating = 5; paintPick();
          mostrarPasoModalResena('listo');
        }, faltante);
      });
    });
  }
})();

// ── Boletín side tab ──────────────────────────────────
(function(){
  var tab = document.getElementById('boletinTab');
  if(!tab) return;
  tab.addEventListener('click', function(){
    var pop = document.getElementById('newsletterPop');
    if(pop){ pop.classList.add('open'); pop.setAttribute('aria-hidden','false'); }
  });
})();

/* ---------- MODAL DE LOGO DE MARCA (clic en el logo de "Nuestras marcas") ---------- */
(function(){
  var overlay = document.getElementById('brandModalOverlay');
  var modalImg = document.getElementById('brandModalImg');
  var modalName = document.getElementById('brandModalName');
  var closeBtn = document.getElementById('brandModalClose');
  if(!overlay) return;

  function openBrandModal(img){
    modalImg.src = img.currentSrc || img.src;
    modalImg.alt = img.alt || '';
    modalName.textContent = img.alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function closeBrandModal(){
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.partners-grid .brand-chip img').forEach(function(img){
    img.setAttribute('role', 'button');
    img.setAttribute('tabindex', '0');
    img.setAttribute('aria-label', 'Ver logo de ' + (img.alt || '') + ' en grande');
    img.addEventListener('click', function(){ openBrandModal(img); });
    img.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        openBrandModal(img);
      }
    });
  });

  closeBtn.addEventListener('click', closeBrandModal);
  overlay.addEventListener('click', function(e){
    if(e.target === overlay) closeBrandModal();
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && overlay.classList.contains('open')) closeBrandModal();
  });
})();

/* ---------- MODAL DE ZOOM DE FOTO DE PRODUCTO (catálogo): la lupa SÍ acerca la imagen ---------- */
(function(){
  var overlay = document.getElementById('productZoomOverlay');
  var modalImg = document.getElementById('productZoomImg');
  var closeBtn = document.getElementById('productZoomClose');
  if(!overlay) return;

  function openProductZoom(img){
    modalImg.src = img.currentSrc || img.src;
    modalImg.alt = img.alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function closeProductZoom(){
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.product-photo').forEach(function(foto){
    var img = foto.querySelector('img');
    var boton = foto.querySelector('[data-zoom-img]');
    if (!img || !boton) return;
    boton.addEventListener('click', function(){ openProductZoom(img); });
  });

  closeBtn.addEventListener('click', closeProductZoom);
  overlay.addEventListener('click', function(e){
    if(e.target === overlay) closeProductZoom();
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && overlay.classList.contains('open')) closeProductZoom();
  });
})();

/* ---------- SCROLLSPY EN MENÚ DE NAVEGACIÓN (DESKTOP + MÓVIL) ---------- */
(function(){
  var navLinks = document.querySelectorAll('.nav-desktop a.nav-item, .mobile-nav-link');
  if (!navLinks.length) return;

  var seenIds = {};
  var sections = [];
  navLinks.forEach(function(link){
    var href = link.getAttribute('href') || '';
    if (href === '#boletin' || href === '#mantenimiento' || !href.startsWith('#')) return;
    var id = href.substring(1);
    if (!id || seenIds[id]) return;
    seenIds[id] = true;
    var el = document.getElementById(id);
    if (el) sections.push(el);
  });

  function setActiveHref(targetHref){
    navLinks.forEach(function(link){
      var href = link.getAttribute('href') || '';
      var isTarget = Boolean(targetHref) && href === targetHref;
      link.classList.toggle('active', isTarget);
      link.classList.toggle('is-active', isTarget);
      if (isTarget) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function onScrollSpy(){
    var scrollPos = window.scrollY + window.innerHeight * 0.4;
    var currentId = null;

    for (var i = 0; i < sections.length; i++){
      var sec = sections[i];
      if (sec.offsetTop <= scrollPos && (sec.offsetTop + sec.offsetHeight) > scrollPos) {
        currentId = sec.getAttribute('id');
      }
    }

    setActiveHref(currentId ? '#' + currentId : null);
  }

  navLinks.forEach(function(link){
    link.addEventListener('click', function(e){
      var href = link.getAttribute('href') || '';
      if (href === '#boletin') {
        e.preventDefault();
        var pop = document.getElementById('newsletterPop');
        if (pop) {
          pop.classList.add('open');
          pop.setAttribute('aria-hidden', 'false');
        }
        return;
      }
      if (href === '#mantenimiento') {
        window.location.href = './mantenimiento.html';
        return;
      }
      if (href.startsWith('#')) {
        setActiveHref(href);
      }
    });
  });

  window.addEventListener('scroll', onScrollSpy, { passive: true });
  setTimeout(onScrollSpy, 100);
})();

/* ============================================================
   BUILDERBOT RESPONSIVE, AVATAR & STATUS ENFORCER
   Ajusta dinámicamente el widget de chat "HC Group Latam":
   - Asegura la imagen del avatar con fallback Data URI robusto
   - Nombre oficial de empresa "HC Group Latam"
   - Muestra el texto "Online" / "Offline" junto al indicador
   - Ventana anclada a la esquina inferior derecha (bottom: 20px, right: 20px)
   - Contenedor acotado en escritorio (380px x 600px) y 100% en móvil
   - Controles y botones contenidos en un único stacking context (z-index: 9999)
   - 100% responsive en móvil (375px, 390px, 414px)
   ============================================================ */
(function initBuilderBotResponsive() {
  var AVATAR_IMG_URL = new URL("./avatar.png", import.meta.url).href;

  function injectStatusStylesIntoRoot(root) {
    if (!root || !root.querySelector) return;
    if (root.querySelector('#builderbot-status-enhancement-styles')) return;
    try {
      var styleEl = document.createElement('style');
      styleEl.id = 'builderbot-status-enhancement-styles';
      styleEl.textContent = [
        ':host { display: inline-flex !important; }',
        '.chat-header, [class*="chat-header" i], chat-header { background: #567116 !important; background: linear-gradient(135deg, #567116 0%, #445911 100%) !important; color: #ffffff !important; border-bottom: none !important; border-top-left-radius: 16px !important; border-top-right-radius: 16px !important; padding: 12px 16px !important; min-height: 64px !important; }',
        '.header-title { display: flex !important; align-items: center !important; gap: 14px !important; flex: 1 !important; min-width: 0 !important; }',
        'chat-avatar, [class*="chat-avatar" i] { display: inline-flex !important; width: 48px !important; height: 48px !important; min-width: 48px !important; min-height: 48px !important; flex-shrink: 0 !important; margin-right: 8px !important; align-items: center !important; justify-content: center !important; }',
        '.avatar-container, .participant-avatar, [class*="avatar-container" i] { width: 48px !important; height: 48px !important; min-width: 48px !important; min-height: 48px !important; border-radius: 50% !important; background-color: #ffffff !important; border: 2.5px solid rgba(255, 255, 255, 0.95) !important; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25) !important; position: relative !important; overflow: hidden !important; display: flex !important; align-items: center !important; justify-content: center !important; padding: 0 !important; box-sizing: border-box !important; }',
        '.avatar-image { object-fit: cover !important; object-position: 48% 18% !important; transform: scale(1.65) !important; transform-origin: 48% 22% !important; width: 100% !important; height: 100% !important; border-radius: 50% !important; display: block !important; }',
        '.meeting-info { display: flex !important; flex-direction: column !important; justify-content: center !important; min-width: 0 !important; flex: 1 !important; gap: 2px !important; }',
        '.meeting-name, .truncate-title, [class*="meeting-name" i] { color: #ffffff !important; font-weight: 700 !important; font-size: 15px !important; line-height: 1.2 !important; margin: 0 !important; }',
        '.meeting-subtitle, .truncate-subtitle, [class*="meeting-subtitle" i] { color: rgba(255, 255, 255, 0.9) !important; }',
        '.connection-status, [class*="connection-status" i] { display: inline-flex !important; align-items: center !important; gap: 6px !important; margin-top: 3px !important; }',
        '.builderbot-status-text { font-size: 12px !important; font-weight: 500 !important; line-height: 1 !important; letter-spacing: 0.01em !important; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important; user-select: none !important; transition: color 0.3s ease !important; }',
        '.builderbot-status-text.connected { color: rgba(255, 255, 255, 0.95) !important; }',
        '.builderbot-status-text.disconnected { color: rgba(254, 202, 202, 0.9) !important; }',
        '.status-indicator { width: 8px !important; height: 8px !important; border-radius: 50% !important; }',
        '.status-indicator.connected { background-color: #22c55e !important; box-shadow: 0 0 0 2px rgba(86, 113, 22, 0.9), 0 0 6px #22c55e !important; }',
        '.status-indicator.disconnected { background-color: #f87171 !important; box-shadow: 0 0 0 2px rgba(86, 113, 22, 0.9), 0 0 6px #ef4444 !important; }',
        '.chat-header button, chat-header button, .back-button, .clear-button, .resize-button, .close-button { color: #ffffff !important; opacity: 0.9 !important; }',
        '.chat-header button svg, chat-header button svg, .back-button svg, .clear-button svg, .resize-button svg, .close-button svg { stroke: #ffffff !important; color: #ffffff !important; }',
        'chat-widget-container, .chat-widget-container, .chat-window, .chat-messages, .messages-container, .chat-body, .chat-content, [class*="messages-container" i], [class*="chat-messages" i] { overscroll-behavior: contain !important; -webkit-overflow-scrolling: touch !important; }'
      ].join('\n');
      root.appendChild(styleEl);
    } catch (e) {}
  }

  function enhanceBuilderBotShadowRoot(shadowRoot) {
    if (!shadowRoot || !shadowRoot.querySelector) return;

    injectStatusStylesIntoRoot(shadowRoot);

    // 1. Título de la empresa en el header del chat
    var titles = shadowRoot.querySelectorAll('.meeting-name, .truncate-title, [class*="company-name" i], [class*="header-title" i] h1, [class*="header-title" i] span');
    titles.forEach(function(titleEl) {
      if (titleEl && titleEl.textContent && titleEl.textContent.trim() === 'HC Group') {
        titleEl.textContent = 'HC Group Latam';
      }
    });

    // 2. Chat header attributes
    var chatHeaders = shadowRoot.querySelectorAll('chat-header, [class*="chat-header" i]');
    chatHeaders.forEach(function(header) {
      if (header.getAttribute('company-name') === 'HC Group') {
        header.setAttribute('company-name', 'HC Group Latam');
      }
      var curSrc = header.getAttribute('avatar-src');
      if (!curSrc || curSrc !== AVATAR_IMG_URL) {
        header.setAttribute('avatar-src', AVATAR_IMG_URL);
      }
    });

    // 3. Avatar dentro del chat header únicamente
    var headerAvatars = shadowRoot.querySelectorAll('chat-header .avatar-image, [class*="chat-header" i] .avatar-image, chat-avatar .avatar-image, .avatar-container .avatar-image');
    headerAvatars.forEach(function(img) {
      if (img.src !== AVATAR_IMG_URL) {
        img.src = AVATAR_IMG_URL;
      }
    });

    var avatarContainers = shadowRoot.querySelectorAll('.avatar-container, chat-avatar, [class*="avatar-container" i]');
    avatarContainers.forEach(function(container) {
      container.style.width = '48px';
      container.style.height = '48px';
      container.style.minWidth = '48px';
      container.style.minHeight = '48px';
      container.style.borderRadius = '50%';
      container.style.overflow = 'hidden';

      var img = container.querySelector('img');
      var initials = container.querySelector('.avatar-initials');
      if (!img) {
        img = document.createElement('img');
        img.className = 'avatar-image';
        img.src = AVATAR_IMG_URL;
        img.alt = 'HC Group Latam';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.borderRadius = '50%';
        img.style.objectFit = 'cover';
        img.style.objectPosition = '48% 18%';
        img.style.transform = 'scale(1.65)';
        img.style.transformOrigin = '48% 22%';
        img.style.backgroundColor = '#FFFFFF';
        container.appendChild(img);
        if (initials) {
          initials.style.display = 'none';
        }
      } else {
        if (img.src !== AVATAR_IMG_URL) {
          img.src = AVATAR_IMG_URL;
        }
        img.style.objectFit = 'cover';
        img.style.objectPosition = '48% 18%';
        img.style.transform = 'scale(1.65)';
        img.style.transformOrigin = '48% 22%';
        if (initials) {
          initials.style.display = 'none';
        }
      }
    });

    // 4. Indicador y texto de estado (En línea / Desconectado)
    var connectionStatuses = shadowRoot.querySelectorAll('.connection-status, [class*="connection-status" i]');
    connectionStatuses.forEach(function(connStatus) {
      var headerEl = connStatus.closest('chat-header') || shadowRoot.querySelector('chat-header');
      var indicator = connStatus.querySelector('.status-indicator, [class*="status-indicator" i]');

      var isConnected = false;
      if (headerEl && headerEl.getAttribute('connected') === 'true') {
        isConnected = true;
      } else if (indicator && indicator.classList.contains('connected')) {
        isConnected = true;
      } else if (indicator && !indicator.classList.contains('disconnected') && navigator.onLine) {
        isConnected = true;
      }

      var statusTextEl = connStatus.querySelector('.builderbot-status-text');
      if (!statusTextEl) {
        statusTextEl = document.createElement('span');
        statusTextEl.className = 'builderbot-status-text';
        connStatus.appendChild(statusTextEl);
      }

      if (isConnected) {
        statusTextEl.textContent = 'En línea';
        statusTextEl.className = 'builderbot-status-text connected';
        connStatus.setAttribute('title', 'En línea');
        connStatus.setAttribute('aria-label', 'Estado: En línea');
        if (indicator) {
          indicator.classList.add('connected');
          indicator.classList.remove('disconnected');
        }
      } else {
        statusTextEl.textContent = 'Desconectado';
        statusTextEl.className = 'builderbot-status-text disconnected';
        connStatus.setAttribute('title', 'Desconectado');
        connStatus.setAttribute('aria-label', 'Estado: Desconectado');
        if (indicator) {
          indicator.classList.add('disconnected');
          indicator.classList.remove('connected');
        }
      }

      if (headerEl && !headerEl._hasStatusObserver) {
        headerEl._hasStatusObserver = true;
        try {
          var headerObserver = new MutationObserver(function() {
            enhanceBuilderBotShadowRoot(shadowRoot);
          });
          headerObserver.observe(headerEl, { attributes: true, attributeFilter: ['connected', 'avatar-src', 'company-name'] });
        } catch (err) {}
      }
    });
  }

  function enhanceLauncherButton() {
    var chatWidgetButtons = document.querySelectorAll('chat-widget-button, .chat-widget-button');
    chatWidgetButtons.forEach(function(widgetBtn) {
      var buttonEl = widgetBtn.tagName && widgetBtn.tagName.toLowerCase() === 'button' ? widgetBtn : (widgetBtn.querySelector('button') || widgetBtn);
      if (!buttonEl) return;

      var iconWrapper = buttonEl.querySelector('.icon-wrapper');
      if (iconWrapper) {
        iconWrapper.style.width = '100%';
        iconWrapper.style.height = '100%';
        iconWrapper.style.margin = '0';
        iconWrapper.style.padding = '0';
        iconWrapper.style.position = 'absolute';
        iconWrapper.style.inset = '0';
        iconWrapper.style.display = 'flex';
        iconWrapper.style.alignItems = 'center';
        iconWrapper.style.justifyContent = 'center';
        iconWrapper.style.borderRadius = '50%';
        iconWrapper.style.overflow = 'hidden';
      }

      var isOpen = widgetBtn.hasAttribute('is-open') || buttonEl.hasAttribute('is-open') || buttonEl.getAttribute('aria-label') === 'Cerrar chat';

      var launcherImg = buttonEl.querySelector('.builderbot-launcher-avatar');
      if (!launcherImg) {
        launcherImg = document.createElement('img');
        launcherImg.className = 'builderbot-launcher-avatar';
        launcherImg.src = AVATAR_IMG_URL;
        launcherImg.alt = 'Avatar Asistente HC Group';
        launcherImg.style.position = 'absolute';
        launcherImg.style.top = '0';
        launcherImg.style.left = '0';
        launcherImg.style.width = '100%';
        launcherImg.style.height = '100%';
        launcherImg.style.objectFit = 'cover';
        launcherImg.style.objectPosition = '48% 18%';
        launcherImg.style.transform = 'scale(1.65)';
        launcherImg.style.transformOrigin = '48% 22%';
        launcherImg.style.borderRadius = '50%';
        launcherImg.style.backgroundColor = '#FFFFFF';
        launcherImg.style.display = 'block';
        launcherImg.style.pointerEvents = 'none';
        
        if (iconWrapper) {
          iconWrapper.appendChild(launcherImg);
        } else {
          buttonEl.appendChild(launcherImg);
        }
      } else {
        if (launcherImg.src !== AVATAR_IMG_URL) {
          launcherImg.src = AVATAR_IMG_URL;
        }
        launcherImg.style.objectFit = 'cover';
        launcherImg.style.objectPosition = '48% 18%';
        launcherImg.style.transform = 'scale(1.65)';
        launcherImg.style.transformOrigin = '48% 22%';
      }

      var svgEl = buttonEl.querySelector('svg');
      if (isOpen) {
        launcherImg.style.display = 'none';
        if (svgEl) svgEl.style.display = 'block';
      } else {
        launcherImg.style.display = 'block';
        if (svgEl) svgEl.style.display = 'none';
      }

      if (!widgetBtn._hasLauncherObserver) {
        widgetBtn._hasLauncherObserver = true;
        try {
          var btnObserver = new MutationObserver(function() {
            enhanceLauncherButton();
          });
          btnObserver.observe(widgetBtn, { attributes: true, childList: true, subtree: true });
        } catch (e) {}
      }
    });
  }

  function traverseCustomElements(node) {
    if (!node) return;
    if (node.shadowRoot) {
      enhanceBuilderBotShadowRoot(node.shadowRoot);
      traverseCustomElements(node.shadowRoot);
    }
    var children = node.children || [];
    for (var i = 0; i < children.length; i++) {
      traverseCustomElements(children[i]);
    }
  }

  var isAdjusting = false;
  function adjustBuilderBotElements() {
    if (isAdjusting) return;
    isAdjusting = true;

    try {
      // 1. Mostrar avatar en la burbuja flotante del launcher
      enhanceLauncherButton();

      // 2. Personalizar header, estado y avatar dentro del ShadowRoot de BuilderBot
      traverseCustomElements(document.body);

      // 3. Prevenir que el scroll dentro del chat mueva la página de fondo
      var chatElements = document.querySelectorAll('chat-widget-container, .chat-widget-container, [id*="builderbot" i]');
      chatElements.forEach(function(el) {
        if (!el._hasScrollBound) {
          el._hasScrollBound = true;
          el.addEventListener('wheel', function(e) {
            e.stopPropagation();
          }, { passive: true });
          el.addEventListener('touchmove', function(e) {
            e.stopPropagation();
          }, { passive: true });
        }
      });
    } finally {
      isAdjusting = false;
    }
  }

  function scheduleAdjust() {
    if (!isAdjusting) {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(adjustBuilderBotElements);
      } else {
        setTimeout(adjustBuilderBotElements, 50);
      }
    }
  }

  window.addEventListener('resize', scheduleAdjust, { passive: true });
  window.addEventListener('orientationchange', scheduleAdjust, { passive: true });
  window.addEventListener('online', scheduleAdjust, { passive: true });
  window.addEventListener('offline', scheduleAdjust, { passive: true });

  if (window.MutationObserver) {
    var observer = new MutationObserver(function(mutations) {
      var shouldAdjust = false;
      for (var i = 0; i < mutations.length; i++) {
        var added = mutations[i].addedNodes;
        if (added && added.length > 0) {
          for (var j = 0; j < added.length; j++) {
            var nodeName = (added[j].nodeName || '').toLowerCase();
            if (nodeName.indexOf('chat') !== -1 || nodeName.indexOf('builderbot') !== -1 || (added[j].classList && (added[j].classList.contains('chat-header') || added[j].classList.contains('chat-widget-container') || added[j].classList.contains('chat-widget-button')))) {
              shouldAdjust = true;
              break;
            }
          }
        }
        if (shouldAdjust) break;
      }
      if (shouldAdjust) {
        scheduleAdjust();
      }
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        if (document.body) {
          observer.observe(document.body, { childList: true, subtree: true });
        }
      });
    }
  }

  setTimeout(adjustBuilderBotElements, 100);
  setTimeout(adjustBuilderBotElements, 300);
  setTimeout(adjustBuilderBotElements, 700);
  setTimeout(adjustBuilderBotElements, 1500);
  setTimeout(adjustBuilderBotElements, 3000);
})();