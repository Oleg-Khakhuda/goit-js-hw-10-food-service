const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');
const savedTheme = localStorage.getItem('theme');

bodyEl.classList.add(Theme.LIGHT);
toggleEl.addEventListener('change', checkBoxChange);

if (savedTheme === '') {
  bodyEl.classList.add(Theme.LIGHT);
}

if (savedTheme === 'false') {
  bodyEl.classList.remove(Theme.LIGHT);
  bodyEl.classList.add(Theme.DARK);
  toggleEl.checked = true;
}

function checkBoxChange(evt) {
  bodyEl.classList.toggle(Theme.LIGHT);
  bodyEl.classList.toggle(Theme.DARK);

  const onLight = bodyEl.classList.contains(Theme.LIGHT);
  localStorage.setItem('theme', onLight);
}