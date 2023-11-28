function toggleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}

const toggle = document.getElementById('toggleButton');
toggle.onclick = toggleTheme;