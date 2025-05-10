const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado || !usuarioLogado.id) {
  alert("Usuário não encontrado. Faça login novamente.");
  window.location.href = "login.html";
}

const usuarioId = usuarioLogado.id;

// Faz uma requisição para a API ler os dados do usuário e preencher nos campos determinados
fetch(`https://681cf109f74de1d219ae55cf.mockapi.io/usuarios/Usuarios/${usuarioId}`)
  .then(res => res.json())
  .then(usuario => {
    document.getElementById("nome").value = usuario.nome;
    document.getElementById("email").value = usuario.email;
    document.getElementById("senha").value = usuario.senha;
  })
  .catch(err => console.error("Erro ao carregar dados:", err));

// Quando o botão de Salvar for clicado, impede da página ser recarregada
document.getElementById("form-alterar").addEventListener("submit", function (e) {
  e.preventDefault();

  const dadosAtualizados = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value,
  };

  // Envia os dados para a API e transforma em JSON
  fetch(`https://681cf109f74de1d219ae55cf.mockapi.io/usuarios/Usuarios/${usuarioId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dadosAtualizados)
  })
    .then(res => {
      if (res.ok) {
        alert("Dados atualizados com sucesso!");
        window.location.href = "index.html"; 
      } else {
        alert("Erro ao atualizar dados.");
      }
    })
    .catch(err => {
      console.error("Erro:", err);
      alert("Erro ao enviar dados.");
    });
});