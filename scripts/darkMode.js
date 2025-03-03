let check = 'dark';
const change = document.querySelector('.modeChange');
const style = document.querySelector('link[rel="stylesheet"]');

if (change) {
    change.addEventListener('click', modeChange);
}

function modeChange() {
    if (check === 'dark') {
        style.href = "style/darkMode.css";
        check = 'light';
    } else {
        style.href = "style/style.css";
        check = 'dark';
    }
}