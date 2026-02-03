// Rota para ver produtos com estoque (JOIN)
app.get('/vitrine', async (req, res) => {
  try {
    const query = `
      SELECT p.nome_peca, p.preco, p.categoria, e.tamanho, e.cor, e.quantidade
      FROM produtos p
      JOIN estoque e ON p.id = e.produto_id
      WHERE e.quantidade > 0;
    `;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar vitrine" });
  }
});