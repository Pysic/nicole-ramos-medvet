// faq.js — Accordion interativo para a seção FAQ
// Padrão: export named function, chamada após loadPartial

export function initFaq() {
  const items = document.querySelectorAll('.faq-item');

  if (!items.length) return;

  items.forEach(item => {
    const btn    = item.querySelector('.faq-question');
    const answerId = btn.getAttribute('aria-controls');
    const answer   = document.getElementById(answerId);

    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Fecha todos os itens abertos
      items.forEach(other => {
        const otherBtn    = other.querySelector('.faq-question');
        const otherAnswer = document.getElementById(otherBtn.getAttribute('aria-controls'));
        otherBtn.setAttribute('aria-expanded', 'false');
        otherAnswer.hidden = true;
        other.classList.remove('open');
      });

      // Se estava fechado, abre o clicado
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
        item.classList.add('open');

        // Scroll suave para o item se estiver fora da view
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    // Teclado: Enter e Space já funcionam em <button>, mas garantimos ESC para fechar
    btn.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        btn.setAttribute('aria-expanded', 'false');
        answer.hidden = true;
        item.classList.remove('open');
        btn.focus();
      }
    });
  });
}
