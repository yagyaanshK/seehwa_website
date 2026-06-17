const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.dataset.open = String(!isOpen);
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.dataset.open = 'false';
    }
  });
}

document.querySelectorAll('.newsletter-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = form.querySelector('.form-note');
    if (note) {
      note.textContent = 'Newsletter integration is pending. Please email seehwagreen@gmail.com for now.';
    }
  });
});

document.querySelectorAll('[data-elevation-counter]').forEach((counter) => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const base = 2820;
  const peak = 5789;
  const loop = 8000;
  const climb = 0.62;
  const formatter = new Intl.NumberFormat('en-US');

  if (reduceMotion) {
    counter.textContent = formatter.format(peak);
    return;
  }

  const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2);
  let lastValue = base;
  counter.textContent = formatter.format(base);

  window.setInterval(() => {
    const progress = (performance.now() % loop) / loop;
    const value = progress < climb ? base + ((peak - base) * ease(progress / climb)) : peak;
    const rounded = Math.round(value);

    if (rounded !== lastValue) {
      counter.textContent = formatter.format(rounded);
      lastValue = rounded;
    }
  }, 70);
});
