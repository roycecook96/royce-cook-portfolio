/* Keep the address usable even when a visitor has no default email app. */
(() => {
  const button = document.querySelector('.copy-email');
  const link = document.querySelector('.contact-email');
  const status = document.querySelector('.copy-status');
  if (!button || !link || !status) return;
  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(link.textContent.trim());
      status.textContent = 'Email address copied. Paste it into a new message.';
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(link);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Select and copy the highlighted email address, then paste it into a new message.';
    }
  });
})();
