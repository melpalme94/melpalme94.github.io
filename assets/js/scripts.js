// TOGGLE DE TEMA
const toggleTheme = document.getElementById('toggleTheme');
const htmlEl = document.documentElement;

toggleTheme.addEventListener('click', () => {
  const currentTheme = htmlEl.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', newTheme);

  // Alternar ícone Sun / Moon
  toggleTheme.classList.toggle('bi-sun');
  toggleTheme.classList.toggle('bi-moon');
});
