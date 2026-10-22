const filters = document.querySelector('.catalogue-filters');
if (filters) {
  const items = [...document.querySelectorAll('.catalogue-grid > [data-category]')];
  const count = document.querySelector('#collection-count');
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const category = button.dataset.filter;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    items.forEach(item => { item.hidden = category !== 'all' && item.dataset.category !== category; });
    const total = items.filter(item => !item.hidden && item.classList.contains('catalogue-card')).length;
    count.textContent = document.documentElement.lang === 'ko' ? `${total}가지 제품` : `${total} ${total === 1 ? 'piece' : 'pieces'}`;
  });
}
