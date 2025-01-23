document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const closeMenu = document.querySelector('.close-menu');
  const sidebar = document.querySelector('.sidebar');

  const toggleSidebar = () => {
    sidebar.classList.toggle('active');
    document.body.classList.toggle('sidebar-active');
  };

  // Добавляем обработчики событий для кнопок
  burgerMenu.addEventListener('click', toggleSidebar);
  closeMenu.addEventListener('click', toggleSidebar);

  // Закрываем боковую панель при клике вне её
  document.addEventListener('click', (event) => {
    if (
      !sidebar.contains(event.target) && // Если клик не внутри sidebar
      !burgerMenu.contains(event.target) && // И не по кнопке burgerMenu
      sidebar.classList.contains('active') // И панель открыта
    ) {
      sidebar.classList.remove('active');
      document.body.classList.remove('sidebar-active');
    }
  });
});