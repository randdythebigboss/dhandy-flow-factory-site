/* ================================================================
   D' HANDY FLOW FACTORY — script.js
   ================================================================ */

/* ── NAVBAR: scroll class + active link ─────────────────────────── */
const navbar    = document.getElementById('navbar');
const navLinks  = document.querySelectorAll('.nav-link');
const sections  = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  highlightNav();
}, { passive: true });

function highlightNav() {
  const y = window.scrollY + navbar.offsetHeight + 60;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
    if (!link) return;
    const inView = y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight;
    link.classList.toggle('active', inView);
  });
}

/* ── HAMBURGER MENU ─────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', toggleMenu);

navMenu.querySelectorAll('.nav-link').forEach(link =>
  link.addEventListener('click', closeMenu)
);

document.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) closeMenu();
});

function toggleMenu() {
  const isOpen = hamburger.classList.toggle('open');
  navMenu.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
function closeMenu() {
  hamburger.classList.remove('open');
  navMenu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── SMOOTH SCROLL for anchor links ─────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    e.preventDefault();
    const target = document.querySelector(id);
    if (!target) return;
    const offset = navbar.offsetHeight;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

/* ── SCROLL REVEAL ──────────────────────────────────────────────── */
const revealTargets = [
  '.svc-card',
  '.g-item',
  '.stat-card',
  '.why-card',
  '.ci-item',
  '.contact-form',
  '.about-copy',
  '.about-stats',
];

const revealEls = document.querySelectorAll(revealTargets.join(','));
revealEls.forEach(el => el.classList.add('reveal'));

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    // Stagger siblings that enter the viewport at the same time
    const siblings = [...revealEls].filter(el => el.classList.contains('reveal') && !el.classList.contains('visible'));
    const delay = siblings.indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('visible'), Math.max(0, delay * 75));
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

revealEls.forEach(el => revealObs.observe(el));

/* ── COUNTER ANIMATION ──────────────────────────────────────────── */
const counters = document.querySelectorAll('.stat-num');

const countObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    runCounter(entry.target);
    countObs.unobserve(entry.target);
  });
}, { threshold: 0.5 });

counters.forEach(el => countObs.observe(el));

function runCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const label    = el.nextElementSibling?.textContent || '';
  const suffix   = label.includes('%') ? '%' : '+';
  const duration = 1800;
  const start    = performance.now();

  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(eased * target).toLocaleString() + (t >= 1 ? suffix : '');
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ── NAVBAR OVERLAY CLOSE on resize ─────────────────────────────── */
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
}, { passive: true });
