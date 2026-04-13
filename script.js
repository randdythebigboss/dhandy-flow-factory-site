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
    hero_line1:   'Estilo.',
    hero_line2:   'Precisión.',
    hero_line3:   'Identidad.',
    hero_sub:     'Experiencia premium de barbería en Santo Domingo.',
    hero_cta1:    'Reservar Cita',
    hero_cta2:    'WhatsApp',

    sec_svc_lbl:  'Lo Que Hacemos',
    sec_svc_ttl:  'Nuestros Servicios',
    sec_svc_desc: 'Cortes y arreglos premium para el hombre moderno.',
    svc_from:     'Desde',
    badge_pop:    'Popular',
    badge_prem:   'Premium',
    svc1_name:    'Corte Clásico',
    svc1_desc:    'Cortes limpios y precisos adaptados a tu estilo y forma de rostro.',
    svc2_name:    'Arreglo de Barba',
    svc2_desc:    'Perfilado y definición de barba para el look que buscas.',
    svc3_name:    'Fade Specialist',
    svc3_desc:    'Degradados bajos, medios y altos con transiciones perfectas.',
    svc4_name:    'Corte Infantil',
    svc4_desc:    'Experiencia cómoda y divertida para los más pequeños.',
    svc5_name:    'Paquete Premium',
    svc5_desc:    'Corte + barba + tratamiento + estilizado. La experiencia completa.',
    svc6_name:    'Cuidado de Uñas',
    svc6_desc:    'Manicura y cuidado de uñas profesional. Presentación completa para cada ocasión.',

    sec_gal_lbl:  'Nuestro Trabajo',
    sec_gal_ttl:  'La Galería',
    sec_gal_desc: 'Cada corte es una obra. Cada cliente sale con confianza.',

    sec_about_lbl: 'La Marca',
    sec_about_ttl: 'Construido con Habilidad.\nMovido por Pasión.',
    about_p1:      'D\' Handy Flow Factory nació en las calles de Santo Domingo con una misión: darle a cada hombre el corte que merece. No solo cortamos cabello — creamos identidades.',
    about_p2:      'Nuestros barberos combinan técnica clásica con estilo moderno, convirtiendo cada cita en una experiencia única. Desde la primera línea hasta el último detalle.',
    about_p3:      'Esto es más que una barbería. Es tu lugar. Tu marca. Tu flow.',
    about_cta:     'Reservar Corte',
    stat1_lbl:     'Clientes Felices',
    stat2_lbl:     'Años de Experiencia',
    stat3_lbl:     'Barberos Expertos',
    stat4_lbl:     '% Satisfacción',

    sec_why_lbl:  'Por Qué Nosotros',
    sec_why_ttl:  '¿Por Qué D\' Handy Flow?',
    why1_ttl:     'Cortes Limpios',
    why1_desc:    'Líneas precisas, fades suaves, detalles nítidos. Sin excepciones.',
    why2_ttl:     'Herramientas Pro',
    why2_desc:    'Máquinas, navajas y productos de primer nivel. Precisión garantizada.',
    why3_ttl:     'Estilo Moderno',
    why3_desc:    'Siempre al día con las últimas tendencias. De clásico a contemporáneo.',
    why4_ttl:     'Servicio Rápido',
    why4_desc:    'Respetamos tu tiempo. Entras y sales fresco, sin atajos.',
    why5_ttl:     'Atención al Detalle',
    why5_desc:    'Nuca, sienes, líneas — cada detalle importa para que salgas perfecto.',

    sec_ct_lbl:   'Contáctanos',
    sec_ct_ttl:   'Reserva tu Cita',
    sec_ct_desc:  '¿Listo para un corte fresco? Contáctanos y te agendamos.',
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
    f_submit:     'Enviar Mensaje',

    gal1_cap:     'Premium Fade',
    gal2_cap:     'Arreglo de Barba',
    gal3_cap:     'Fade Haircut',
    gal4_cap:     'Corte Clásico',
    gal5_cap:     'Estilo Moderno',
    gal6_cap:     'Experiencia Full',

    footer_tag:      'Estilo. Precisión. Identidad.',
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
    hero_line1:   'Style.',
    hero_line2:   'Precision.',
    hero_line3:   'Identity.',
    hero_sub:     'Premium barber experience in Santo Domingo.',
    hero_cta1:    'Book Appointment',
    hero_cta2:    'WhatsApp',

    sec_svc_lbl:  'What We Do',
    sec_svc_ttl:  'Our Services',
    sec_svc_desc: 'Premium cuts and grooming for the modern man.',
    svc_from:     'From',
    badge_pop:    'Popular',
    badge_prem:   'Premium',
    svc1_name:    'Classic Haircut',
    svc1_desc:    'Sharp, clean cuts tailored to your style and face shape.',
    svc2_name:    'Beard Grooming',
    svc2_desc:    'Precision shaping and detailing for the perfect beard.',
    svc3_name:    'Fade Specialist',
    svc3_desc:    'Low, mid, high fades with flawless transitions.',
    svc4_name:    'Kids Cuts',
    svc4_desc:    'Fun, comfortable experience for the little ones.',
    svc5_name:    'Premium Package',
    svc5_desc:    'Haircut + beard + treatment + styling. The complete experience.',
    svc6_name:    'Nail Care',
    svc6_desc:    'Professional manicure and nail care. Complete presentation for every occasion.',

    sec_gal_lbl:  'Our Work',
    sec_gal_ttl:  'The Gallery',
    sec_gal_desc: 'Every cut is a masterpiece. Every client leaves with confidence.',

    sec_about_lbl: 'The Brand',
    sec_about_ttl: 'Built on Skill.\nDriven by Passion.',
    about_p1:      'D\' Handy Flow Factory was born in the streets of Santo Domingo with one mission: give every man the cut he deserves. We don\'t just cut hair — we craft identities.',
    about_p2:      'Our barbers blend classic technique with modern edge, turning every appointment into a unique experience. From the first line to the last detail.',
    about_p3:      'This is more than a barbershop. This is your spot. Your brand. Your flow.',
    about_cta:     'Book Your Cut',
    stat1_lbl:     'Happy Clients',
    stat2_lbl:     'Years in Business',
    stat3_lbl:     'Expert Barbers',
    stat4_lbl:     '% Satisfaction',

    sec_why_lbl:  'Why Us',
    sec_why_ttl:  'Why D\' Handy Flow?',
    why1_ttl:     'Clean Cuts',
    why1_desc:    'Crisp lines, smooth fades, sharp details — every single time.',
    why2_ttl:     'Pro Tools',
    why2_desc:    'Top-tier clippers, razors, and grooming products. Precision guaranteed.',
    why3_ttl:     'Modern Style',
    why3_desc:    'Always current with the latest trends. Classic to contemporary.',
    why4_ttl:     'Fast Service',
    why4_desc:    'We respect your time. In and out with a fresh cut, no shortcuts.',
    why5_ttl:     'Attention to Detail',
    why5_desc:    'Necklines, temples, edges — every detail matters for a perfect look.',

    sec_ct_lbl:   'Get In Touch',
    sec_ct_ttl:   'Book Your Appointment',
    sec_ct_desc:  'Ready for a fresh cut? Reach out and we\'ll set you up.',
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
    f_submit:     'Send Message',

    gal1_cap:     'Premium Fade',
    gal2_cap:     'Beard Grooming',
    gal3_cap:     'Fade Haircut',
    gal4_cap:     'Classic Cut',
    gal5_cap:     'Modern Style',
    gal6_cap:     'Full Experience',

    footer_tag:      'Style. Precision. Identity.',
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
