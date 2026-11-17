const form = document.getElementById('form');
const status = document.getElementById('status');

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
  status.textContent = 'Mensagem enviada (demonstração). Obrigado!';
});
