const cartoes = document.querySelectorAll('.cartao');

cartoes.forEach(cartao => {
  cartao.addEventListener('click', () => {
    cartao.classList.toggle('active');
  });
});
