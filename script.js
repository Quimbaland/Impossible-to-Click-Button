"use strict";

const evilButton = document.getElementById('evil-button');

evilButton.addEventListener('click', () => {
    alert('Nice Try');
    window.close();
});

document.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;
    const buttonBox = evilButton.getBoundingClientRect();
    console.log(buttonBox.x, buttonBox.y);
});