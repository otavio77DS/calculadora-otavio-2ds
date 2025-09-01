const screen = document.getElementById('answer');

const buttons = document.querySelectorAll('.calc-btn');

const historyBtn = document.getElementById('history-btn');

const historyPanel = document.getElementById('history-panel');

const historyList = document.getElementById('history-list');

const closeHistory = document.getElementById('close-history');

const clearHistory = document.getElementById('clear-history');

const themeToggle = document.getElementById('theme-toggle');

function setTheme(mode) {
    document.documentElement.classList.toggle('dark', mode === 'dark');

    themeToggle.setAttribute('aria-pressed', mode === 'dark');

    localStorage.setItem('theme', mode);
}

setTheme(localStorage.getItem('theme') || 'light');

themeToggle.onclick = () => {

    const newMode = document.documentElement.classList.contains('dark') ? 'light': 'dark';

    setTheme(newMode);

}