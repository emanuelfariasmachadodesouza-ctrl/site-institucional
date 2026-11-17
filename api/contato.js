module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ erro: 'Método não permitido' });

  const { nome, email, mensagem } = req.body || {};
  if (!nome || !email || !mensagem) return res.status(422).json({ erro: 'Preencha todos os campos' });

  try {
    const r = await fetch(`${process.env.SUPABASE_URL}/rest/v1/contatos`, {
      method: 'POST',
      headers: {
        apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal'
      },
      body: JSON.stringify({
        nome: String(nome).slice(0, 100),
        email: String(email).slice(0, 150),
        mensagem: String(mensagem).slice(0, 1000)
      })
    });
    if (!r.ok) throw new Error();
    res.status(201).json({ ok: true });
  } catch {
    res.status(500).json({ erro: 'Não foi possível enviar a mensagem' });
  }
};
