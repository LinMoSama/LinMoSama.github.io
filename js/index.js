const btn = document.querySelector('#btn');
const mask = document.querySelector('.mask');
btn.addEventListener('click', () => {
    mask.style.display = 'none';
    document.querySelector('#music').play();
})