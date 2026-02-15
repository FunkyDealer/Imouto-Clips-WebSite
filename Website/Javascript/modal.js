// const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log("open button clicked");
//     const modal = document.querySelector(button.dataset.modalTarget);
//     openModal(modal);
//   });
// })

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.modalActive');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log("close button clicked");
    const modal = button.closest('.modal');
    closeModal(modal);
  })
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('modalActive');
    overlay.classList.add('modalActive');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('modalActive');
    overlay.classList.remove('modalActive');
}
