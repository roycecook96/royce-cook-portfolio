/* Accessible project tabs. Without JavaScript, every project stays visible. */
(() => {
  const list = document.querySelector('.tab-list');
  if (!list) return;
  const tabs = [...list.querySelectorAll('[role="tab"]')];
  const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')));
  list.hidden = false;

  function select(i, focus) {
    tabs.forEach((t, j) => {
      const on = i === j;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      panels[j].hidden = !on;
    });
    if (focus) tabs[i].focus();
  }

  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i, false));
    t.addEventListener('keydown', (e) => {
      let n = null;
      if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') n = 0;
      else if (e.key === 'End') n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); select(n, true); }
    });
  });

  // Links to a project (#work-1 to #work-4) open its tab.
  function openFromHash(hash, scroll) {
    const m = /^#work-(\d)$/.exec(hash || '');
    if (!m) return false;
    const i = panels.findIndex((p) => p.contains(document.getElementById('work-' + m[1])));
    if (i < 0) return false;
    select(i, false);
    if (scroll) list.scrollIntoView({ block: 'start' });
    return true;
  }
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#work-"]');
    if (a && openFromHash(a.getAttribute('href'), true)) {
      e.preventDefault();
      history.pushState(null, '', a.getAttribute('href'));
      tabs[tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true')].focus({ preventScroll: true });
    }
  });
  window.addEventListener('hashchange', () => openFromHash(location.hash, true));
  if (!openFromHash(location.hash, true)) select(0, false);
})();
