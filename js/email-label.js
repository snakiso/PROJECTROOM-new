const input = document.querySelector('#email');
const label = document.querySelector('.email-label');

input.addEventListener('input', (e) => {
    e.target.value.trim() !== '' ? label.classList.add('js-active') : label.classList.remove('js-active')
})