document.querySelectorAll('.subscribe-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
  });
});

document.querySelector('#payment-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Card Declined');
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});
