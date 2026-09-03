/* SEEHWA Green Foundation — site behaviour */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ----------------------------------------------------------------------
     Header: transparent over the hero, solid once scrolled past it.
     Uses a sentinel + IntersectionObserver so there is no scroll handler.
     ---------------------------------------------------------------------- */
  var header = document.querySelector('.header');
  var hero = document.querySelector('[data-hero]');

  if (header) {
    if (hero && 'IntersectionObserver' in window) {
      var sentinel = document.createElement('div');
      sentinel.setAttribute('aria-hidden', 'true');
      sentinel.style.cssText = 'position:absolute;top:60vh;left:0;width:1px;height:1px;pointer-events:none';
      hero.appendChild(sentinel);

      new IntersectionObserver(function (entries) {
        header.classList.toggle('is-solid', !entries[0].isIntersecting);
      }, { rootMargin: '-' + header.offsetHeight + 'px 0px 0px 0px' }).observe(sentinel);
    } else {
      /* pages without a photographic hero are solid from the start */
      header.classList.add('is-solid');
    }
  }

  /* ----------------------------------------------------------------------
     Mobile navigation
     ---------------------------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('#site-nav');

  if (toggle && nav) {
    var setNav = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.dataset.open = String(open);
      document.body.style.overflow = open ? 'hidden' : '';
    };

    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setNav(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setNav(false);
        toggle.focus();
      }
    });

    /* reset when resizing back up to the desktop layout */
    window.matchMedia('(min-width: 901px)').addEventListener('change', function (event) {
      if (event.matches) setNav(false);
    });
  }

  /* ----------------------------------------------------------------------
     Reduced motion: CSS cannot stop SMIL animation inside SVG, so remove
     the animation elements outright when the user has asked for less motion.
     ---------------------------------------------------------------------- */
  var stopSmil = function () {
    document.querySelectorAll('svg').forEach(function (svg) {
      if (typeof svg.pauseAnimations === 'function') svg.pauseAnimations();
    });
    document
      .querySelectorAll('animate, animateTransform, animateMotion, set')
      .forEach(function (node) {
        node.remove();
      });
  };

  if (reduceMotion.matches) stopSmil();
  reduceMotion.addEventListener('change', function (event) {
    if (event.matches) stopSmil();
  });
})();

/* Newsletter placeholder — no mailing backend is connected yet. */
document.querySelectorAll('.newsletter-form').forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var note = form.querySelector('.form__note');
    var input = form.querySelector('input[type="email"]');
    if (!note) return;
    if (input && !input.value.trim()) {
      note.textContent = 'Please enter an email address.';
      input.focus();
      return;
    }
    note.textContent = 'Newsletter integration is pending. Please email seehwagreen@gmail.com for now.';
  });
});
