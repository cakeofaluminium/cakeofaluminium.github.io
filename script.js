function showPage(pageId) {
  // Скрываем все страницы
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Показываем нужную
  document.getElementById(pageId).classList.add('active');
  
  // Меняем URL (без перезагрузки)
  window.location.hash = pageId;
}

// При загрузке страницы смотрим на # в URL
window.addEventListener('load', function() {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    showPage(hash);
  }
});

// Если пользователь нажал "назад/вперед" в браузере
window.addEventListener('hashchange', function() {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    showPage(hash);
  }
});