document.addEventListener('DOMContentLoaded', () => {
  const dropdownLinks = document.querySelectorAll('.dropdown-link');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      // 현재 드롭다운 메뉴
      const dropdownMenu = link.nextElementSibling;
      const isExpanded = link.getAttribute('aria-expanded') === 'true';

      // 모든 드롭다운 메뉴 닫기
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
      document.querySelectorAll('.dropdown-link').forEach(link => {
        link.setAttribute('aria-expanded', 'false');
      });

      // 현재 드롭다운 메뉴 열기/닫기
      if (!isExpanded) {
        dropdownMenu.style.display = 'block';
        link.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 드롭다운 외부 클릭 시 닫기
  document.addEventListener('click', event => {
    if (!event.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
      document.querySelectorAll('.dropdown-link').forEach(link => {
        link.setAttribute('aria-expanded', 'false');
      });
    }
  });
});
