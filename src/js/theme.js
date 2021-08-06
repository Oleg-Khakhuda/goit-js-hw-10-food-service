const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');
const savedTheme = localStorage.getItem('theme');

toggleEl.addEventListener('change', themeMaker);

bodyEl.classList.add(Theme.LIGHT);

// Проверка темы

function changeTheme() { 
  if (savedTheme === null) {
    localStorage.setItem('theme', Theme.LIGHT);
  } else if (savedTheme === 'dark-theme') {  
    bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
    toggleEl.checked = true;
  };
};
changeTheme();

// Переключение темы

function themeMaker() { 
if (toggleEl.checked) { 
  bodyEl.classList.remove(Theme.LIGHT);
  bodyEl.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
  return; 
  } bodyEl.classList.remove(Theme.DARK);
  bodyEl.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
};
