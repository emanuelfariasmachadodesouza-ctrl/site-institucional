const form = document.getElementById('form');
const status = document.getElementById('status');

form.addEventListener('submit', async e => {
  e.preventDefault();
  status.className = '';
  status.textContent = 'Enviando...';
  try {
    const r = await fetch('/api/contato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form)))
    });
    const dados = await r.json();
    if (!r.ok) throw new Error(dados.erro || 'Falha ao enviar');
    form.reset();
    status.textContent = 'Mensagem enviada. Obrigado!';
  } catch (err) {
    status.className = 'erro';
    status.textContent = err.message;
  }
});
