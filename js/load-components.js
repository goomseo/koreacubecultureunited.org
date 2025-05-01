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

loadComponent('#header', 'includes/header.html');
loadComponent('#footer', 'includes/footer.html');
