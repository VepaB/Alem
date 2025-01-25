document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const closeMenu = document.querySelector('.close-menu');
  const sidebar = document.querySelector('.sidebar');
  const popup = document.getElementById("discount-popup");
  const slider = document.querySelector('.slider'); // Add this line

  const toggleSidebar = () => {
    sidebar.classList.toggle('active');
    document.body.classList.toggle('sidebar-active');
    console.log('Sidebar toggled. Active:', sidebar.classList.contains('active'));
  };

  // Add event listeners for buttons
  burgerMenu.addEventListener('click', (event) => {
    toggleSidebar();
    console.log('Burger menu clicked.');
  });
  closeMenu.addEventListener('click', (event) => {
    toggleSidebar();
    console.log('Close menu clicked.');
  });

  // Close sidebar when clicking outside of it
  document.addEventListener('click', (event) => {
    if (
      !sidebar.contains(event.target) && // If click is not inside sidebar
      !burgerMenu.contains(event.target) && // And not on burgerMenu button
      sidebar.classList.contains('active') && // And sidebar is open
      !popup.contains(event.target) && // And not on popup
      !slider.contains(event.target) // And not on slider
    ) {
      sidebar.classList.remove('active');
      document.body.classList.remove('sidebar-active');
      console.log('Sidebar closed due to outside click.');
    } else {
      console.log('Click detected but sidebar remains open.');
    }
  });
});