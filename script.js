/* ================================================================
   D' Handy Flow Factory — script.js
   ================================================================ */

/* ── TRANSLATIONS ───────────────────────────────────────────────── */
const i18n = {
  es: {
    nav_home:     'Inicio',
    nav_services: 'Servicios',
    nav_gallery:  'Galería',
    nav_about:    'Nosotros',
    nav_contact:  'Contacto',

    hero_badge:   'Santo Domingo · Est. 2018',
    hero_line1:   'Tu Mejor',
    hero_line2:   'Corte',
    hero_line3:   'Empieza Aquí.',
    hero_sub:     'El lugar donde los hombres vienen a verse distintos.',
    hero_cta1:    'Agenda tu Corte',
    hero_cta2:    'Escríbenos',

    sec_svc_lbl:  'Lo Que Hacemos',
    sec_svc_ttl:  'Nuestros Servicios',
    sec_svc_desc: 'Cada servicio diseñado para que salgas como debes.',
    svc_from:     'Desde',
    badge_pop:    'Popular',
    badge_prem:   'Premium',
    svc1_name:    'Corte Clásico',
    svc1_desc:    'Corte limpio, líneas definidas. El resultado que esperas, cada vez.',
    svc2_name:    'Arreglo de Barba',
    svc2_desc:    'Tu barba, bien perfilada. Porque la barba habla antes que tú.',
    svc3_name:    'Fade Specialist',
    svc3_desc:    'Fade bajo, medio o alto. Transición perfecta de la nuca a las sienes.',
    svc4_name:    'Corte Infantil',
    svc4_desc:    'Sin drama, resultado que los papás aprueban. Los niños vuelven solos.',
    svc5_name:    'Paquete Premium',
    svc5_desc:    'Corte + barba + tratamiento + estilizado. Una hora que cambia cómo te ves y cómo te sientes.',
    svc6_name:    'Cuidado de Uñas',
    svc6_desc:    'Manos cuidadas, presentación completa. Detalles que separan lo bueno de lo excelente.',

    sec_gal_lbl:  'Nuestro Trabajo',
    sec_gal_ttl:  'El Trabajo Habla',
    sec_gal_desc: 'No necesitamos convencerte. Las fotos lo hacen.',

    sec_about_lbl: 'La Marca',
    sec_about_ttl: 'Nacimos para Esto.\nSomos Esto.',
    about_p1:      'Nacimos en Santo Domingo Este con un propósito claro: hacerte ver bien y sentirte mejor. Desde el primer corte, supimos que esto era más que un trabajo.',
    about_p2:      'Nuestros barberos no solo cortan — leen tu estilo, entienden tu flow, y lo ejecutan. Cada cliente sale distinto. Todos salen mejor.',
    about_p3:      'D\' Handy Flow Factory no es solo una barbería. Es el lugar donde los hombres vienen a reinventarse.',
    about_cta:     'Reserva Ahora',
    stat1_lbl:     'Clientes Felices',
    stat2_lbl:     'Años de Experiencia',
    stat3_lbl:     'Barberos Expertos',
    stat4_lbl:     '% Satisfacción',

    sec_why_lbl:  'Por Qué Nosotros',
    sec_why_ttl:  'La Diferencia Es Obvia.',
    why1_ttl:     'Precisión Sin Excusas',
    why1_desc:    'Cada línea, cada fade, cada detalle. Ejecutado sin errores, sin atajos.',
    why2_ttl:     'Herramientas de Elite',
    why2_desc:    'Equipo profesional de primer nivel. Porque el resultado se siente en cada corte.',
    why3_ttl:     'Estilos de Ahora',
    why3_desc:    'Tendencias actuales, técnica clásica. Lo moderno y lo atemporal, en un solo lugar.',
    why4_ttl:     'Tu Tiempo Importa',
    why4_desc:    'Cortamos rápido. Cortamos bien. Sin sacrificar calidad por velocidad.',
    why5_ttl:     'Detalle Total',
    why5_desc:    'Nuca, sienes, patillas — ningún detalle es menor cuando quieres verte perfecto.',

    sec_ct_lbl:   'Contáctanos',
    sec_ct_ttl:   'Aparta tu Silla',
    sec_ct_desc:  'Los cupos son limitados. Reserva ahora y asegura tu cita.',
    ci_phone_lbl: 'Teléfono',
    ci_wa_lbl:    'WhatsApp',
    ci_loc_lbl:   'Ubicación',
    ci_loc_val:   'Santo Domingo Este, República Dominicana',
    ci_hrs_lbl:   'Horario',
    ci_hrs_val:   'Lun–Sáb: 9AM – 8PM\nDom: 10AM – 4PM',
    f_lbl_name:   'Tu Nombre',
    f_lbl_phone:  'Teléfono',
    f_lbl_svc:    'Servicio',
    f_lbl_msg:    'Mensaje',
    f_ph_name:    'Juan Pérez',
    f_ph_phone:   '+1 (829) 000-0000',
    f_svc_ph:     'Selecciona un servicio…',
    f_ph_msg:     '¿Alguna solicitud especial o preferencia?',
    f_lbl_date:   'Fecha Preferida',
    f_lbl_time:   'Hora Preferida',
    f_time_ph:    'Selecciona horario…',
    f_submit:     'Reservar por WhatsApp',

    gal1_cap:     'Fade Premium',
    gal2_cap:     'Barba Definida',
    gal3_cap:     'Skin Fade',
    gal4_cap:     'Acabado Limpio',
    gal5_cap:     'Look Actual',
    gal6_cap:     'La Experiencia',

    footer_tag:      'Tu Mejor Corte Empieza Aquí.',
    footer_sub:      'Barbería premium en el corazón de Santo Domingo.',
    footer_nav_h:    'Navegación',
    footer_social_h: 'Síguenos',
    footer_copy:     '© 2025 D\' Handy Flow Factory. Todos los derechos reservados.',
  },

  en: {
    nav_home:     'Home',
    nav_services: 'Services',
    nav_gallery:  'Gallery',
    nav_about:    'About',
    nav_contact:  'Contact',

    hero_badge:   'Santo Domingo · Est. 2018',
    hero_line1:   'Your Best',
    hero_line2:   'Cut',
    hero_line3:   'Starts Here.',
    hero_sub:     'Where men come to look different.',
    hero_cta1:    'Book Your Cut',
    hero_cta2:    'Chat With Us',

    sec_svc_lbl:  'What We Do',
    sec_svc_ttl:  'Our Services',
    sec_svc_desc: 'Every service designed so you leave looking your best.',
    svc_from:     'From',
    badge_pop:    'Popular',
    badge_prem:   'Premium',
    svc1_name:    'Classic Haircut',
    svc1_desc:    'Clean cut, sharp lines. The result you expect, every time.',
    svc2_name:    'Beard Grooming',
    svc2_desc:    'Your beard, perfectly shaped. Because your beard speaks before you do.',
    svc3_name:    'Fade Specialist',
    svc3_desc:    'Low, mid, or high fade. Perfect transition from neckline to temples.',
    svc4_name:    'Kids Cuts',
    svc4_desc:    'No drama, a result parents approve. Kids come back on their own.',
    svc5_name:    'Premium Package',
    svc5_desc:    'Cut + beard + treatment + styling. One hour that changes how you look and feel.',
    svc6_name:    'Nail Care',
    svc6_desc:    'Well-groomed hands, complete presentation. Details that separate good from excellent.',

    sec_gal_lbl:  'Our Work',
    sec_gal_ttl:  'The Work Speaks',
    sec_gal_desc: 'We don\'t need to convince you. The photos do.',

    sec_about_lbl: 'The Brand',
    sec_about_ttl: 'Born for This.\nWe Live This.',
    about_p1:      'We were born in Santo Domingo Este with one clear purpose: make you look good and feel better. From the very first cut, we knew this was more than a job.',
    about_p2:      'Our barbers don\'t just cut — they read your style, understand your flow, and execute. Every client leaves different. All leave better.',
    about_p3:      'D\' Handy Flow Factory is not just a barbershop. It\'s the place where men come to reinvent themselves.',
    about_cta:     'Book Now',
    stat1_lbl:     'Happy Clients',
    stat2_lbl:     'Years in Business',
    stat3_lbl:     'Expert Barbers',
    stat4_lbl:     '% Satisfaction',

    sec_why_lbl:  'Why Us',
    sec_why_ttl:  'The Difference Is Obvious.',
    why1_ttl:     'Precision, No Excuses',
    why1_desc:    'Every line, every fade, every detail. Executed without errors, without shortcuts.',
    why2_ttl:     'Elite Tools',
    why2_desc:    'Top-tier professional equipment. Because the result shows in every cut.',
    why3_ttl:     'Today\'s Styles',
    why3_desc:    'Current trends, classic technique. Modern and timeless, in one place.',
    why4_ttl:     'Your Time Matters',
    why4_desc:    'We cut fast. We cut right. Without sacrificing quality for speed.',
    why5_ttl:     'Total Detail',
    why5_desc:    'Neckline, temples, sideburns — no detail is minor when you want to look perfect.',

    sec_ct_lbl:   'Get In Touch',
    sec_ct_ttl:   'Claim Your Chair',
    sec_ct_desc:  'Spots fill fast. Book now and secure your appointment.',
    ci_phone_lbl: 'Phone',
    ci_wa_lbl:    'WhatsApp',
    ci_loc_lbl:   'Location',
    ci_loc_val:   'Santo Domingo Este, Dominican Republic',
    ci_hrs_lbl:   'Hours',
    ci_hrs_val:   'Mon–Sat: 9AM – 8PM\nSun: 10AM – 4PM',
    f_lbl_name:   'Your Name',
    f_lbl_phone:  'Phone',
    f_lbl_svc:    'Service',
    f_lbl_msg:    'Message',
    f_ph_name:    'John Doe',
    f_ph_phone:   '+1 (829) 000-0000',
    f_svc_ph:     'Select a service…',
    f_ph_msg:     'Any special requests or preferences?',
    f_lbl_date:   'Preferred Date',
    f_lbl_time:   'Preferred Time',
    f_time_ph:    'Select time…',
    f_submit:     'Book via WhatsApp',

    gal1_cap:     'Premium Fade',
    gal2_cap:     'Sharp Beard',
    gal3_cap:     'Skin Fade',
    gal4_cap:     'Clean Finish',
    gal5_cap:     'Current Look',
    gal6_cap:     'The Experience',

    footer_tag:      'Your Best Cut Starts Here.',
    footer_sub:      'Premium barbershop in the heart of Santo Domingo.',
    footer_nav_h:    'Navigation',
    footer_social_h: 'Follow Us',
    footer_copy:     '© 2025 D\' Handy Flow Factory. All rights reserved.',
  },
};

/* ── LANGUAGE SYSTEM ────────────────────────────────────────────── */
let currentLang = 'es';

function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t[key];
    if (val === undefined) return;
    // Multi-line: replace \n with <br>
    if (val.includes('\n')) {
      el.innerHTML = val.replace(/\n/g, '<br>');
    } else {
      el.textContent = val;
    }
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key]) el.placeholder = t[key];
  });

  // Toggle button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Wire up toggle buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// Apply default on load
applyLang('es');

/* ── NAVBAR ─────────────────────────────────────────────────────── */
const navbar   = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveLink();
}, { passive: true });

function updateActiveLink() {
  const offset = navbar.offsetHeight + 50;
  const y = window.scrollY + offset;
  document.querySelectorAll('section[id]').forEach(sec => {
    const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
    if (!link) return;
    link.classList.toggle('active', y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight);
  });
}

/* ── HAMBURGER ──────────────────────────────────────────────────── */
hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close on link click
navLinks.querySelectorAll('.nav-link').forEach(a =>
  a.addEventListener('click', closeNav)
);
// Close on outside click
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) closeNav();
});
function closeNav() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) closeNav();
}, { passive: true });

/* ── SMOOTH SCROLL ──────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - navbar.offsetHeight, behavior: 'smooth' });
  });
});

/* ── SCROLL REVEAL ──────────────────────────────────────────────── */
const revealSel = '.svc-card, .g-item, .stat, .why-item, .ci, .contact-form, .about-copy, .about-stats';
const revealEls = document.querySelectorAll(revealSel);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObs = new IntersectionObserver(entries => {
  // Collect all visible at once, stagger them
  const visible = entries.filter(e => e.isIntersecting);
  visible.forEach((entry, i) => {
    setTimeout(() => entry.target.classList.add('in'), i * 70);
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

revealEls.forEach(el => revealObs.observe(el));

/* ── COUNTER ANIMATION ──────────────────────────────────────────── */
const counterEls = document.querySelectorAll('.stat-n');

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    animateCounter(entry.target);
    counterObs.unobserve(entry.target);
  });
}, { threshold: 0.5 });

counterEls.forEach(el => counterObs.observe(el));

function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const label    = el.nextElementSibling?.textContent ?? '';
  const suffix   = label.includes('%') ? '%' : '+';
  const duration = 1600;
  const start    = performance.now();

  (function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const v = Math.round((1 - Math.pow(1 - p, 3)) * target);
    el.textContent = v.toLocaleString() + (p >= 1 ? suffix : '');
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}

/* ── BOOKING FORM → WHATSAPP ────────────────────────────────────── */
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  function setFieldError(fieldId, errId, msg) {
    const field = document.getElementById(fieldId);
    const err   = document.getElementById(errId);
    if (msg) {
      field.closest('.field').classList.add('field--error');
      if (err) err.textContent = msg;
    } else {
      field.closest('.field').classList.remove('field--error');
      if (err) err.textContent = '';
    }
  }

  // Clear errors on input
  bookingForm.addEventListener('input', function (e) {
    const field = e.target.closest('.field');
    if (field) field.classList.remove('field--error');
  });

  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameEl  = document.getElementById('f-name');
    const svcEl   = document.getElementById('f-svc');
    const phoneEl = document.getElementById('f-phone');
    const dateEl  = document.getElementById('appt-date');
    const timeEl  = document.getElementById('appt-time');
    const msgEl   = document.getElementById('f-msg');

    const name  = nameEl.value.trim();
    const svc   = svcEl.value.trim();
    const phone = phoneEl.value.trim();
    const date  = dateEl.value;
    const time  = timeEl.value;
    const msg   = msgEl.value.trim();

    // Clear all errors
    setFieldError('f-name', 'err-name', '');
    setFieldError('f-svc',  'err-svc',  '');

    let valid = true;

    if (!name) {
      setFieldError('f-name', 'err-name',
        currentLang === 'es' ? 'Ingresa tu nombre.' : 'Please enter your name.');
      nameEl.focus();
      valid = false;
    }
    if (!svc) {
      setFieldError('f-svc', 'err-svc',
        currentLang === 'es' ? 'Selecciona un servicio.' : 'Please select a service.');
      if (valid) svcEl.focus();
      valid = false;
    }
    if (!valid) return;

    // Format date for display
    const dateDisplay = date
      ? new Date(date + 'T00:00:00').toLocaleDateString(
          currentLang === 'es' ? 'es-DO' : 'en-US',
          { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        )
      : (currentLang === 'es' ? 'Por confirmar' : 'To be confirmed');

    const timeDisplay  = time  || (currentLang === 'es' ? 'Por confirmar'  : 'To be confirmed');
    const phoneDisplay = phone || (currentLang === 'es' ? 'No indicado'    : 'Not provided');

    let text;
    if (currentLang === 'es') {
      text = `Hola, quiero agendar una cita en D' Handy Flow Factory:\n\n👤 Nombre: ${name}\n📞 Teléfono: ${phoneDisplay}\n✂️ Servicio: ${svc}\n📅 Fecha: ${dateDisplay}\n⏰ Hora: ${timeDisplay}${msg ? '\n💬 Mensaje: ' + msg : ''}`;
    } else {
      text = `Hi, I'd like to book an appointment at D' Handy Flow Factory:\n\n👤 Name: ${name}\n📞 Phone: ${phoneDisplay}\n✂️ Service: ${svc}\n📅 Date: ${dateDisplay}\n⏰ Time: ${timeDisplay}${msg ? '\n💬 Message: ' + msg : ''}`;
    }

    window.open('https://wa.me/18297129611?text=' + encodeURIComponent(text), '_blank', 'noopener,noreferrer');
  });
}
