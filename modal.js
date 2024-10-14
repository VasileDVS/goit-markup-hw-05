// Modal functionality
const openModalButton = document.querySelector('[data-modal-open]');
const closeModalButton = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.backdrop');

openModalButton.addEventListener('click', () => {
    backdrop.classList.remove('is-hidden');
});

closeModalButton.addEventListener('click', () => {
    backdrop.classList.add('is-hidden');
});

