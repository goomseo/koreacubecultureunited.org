async function loadComponent(selector, file) {
  const element = document.querySelector(selector);
  if (element) {
    const response = await fetch(file);
    if (response.ok) {
      element.innerHTML = await response.text();
    } else {
      console.error(`Failed to load ${file}`);
    }
  }
}

// 헤더와 푸터 로드
loadComponent('#header', 'includes/header.html');
loadComponent('#footer', 'includes/footer.html');
