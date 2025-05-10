const configButton = document.getElementById('configButton');
const configMenu = document.getElementById('configMenu');

// Alterna a exibição do menu entre fechado e aberto, com base no clique
configButton.addEventListener('click', () => {
  if (configMenu.style.display === 'block') {
    configMenu.style.display = 'none';
  } else {
    configMenu.style.display = 'block';
  }
});

// Função que visualiza se está ocorrendo clique fora do Menu.
// Se houver, ele fecha o Menu
document.addEventListener('click', (event) => {
  if (!configButton.contains(event.target) && !configMenu.contains(event.target)) {
    configMenu.style.display = 'none';
  }
});

// Função para Copiar o Link de convite. Funcional para dispositivos móveis
function copiarLink() {
  const input = document.getElementById('invite-link');
  input.select();
  input.setSelectionRange(0, 99999); // Seleciona do índice 0 até o final, mais uma garantia mesmo

  navigator.clipboard.writeText(input.value) // Permite que a área de transferência interaja com o usuário
    .then(() => alert("Link copiado com sucesso!"))
    .catch(err => console.error("Erro ao copiar:", err));
}

// Evento que dispara quando todo o HTML for lido e realiza uma função
document.addEventListener("DOMContentLoaded", async () => {
  // Converte o formato JSON em Objeto
  const usuarioLocal = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuarioLocal || !usuarioLocal.id) {
    alert("Usuário não logado.");
    window.location.href = "../login/cadastro/login/index.html";
    return;
  }

  // Faz uma requisição pro computador ler os dados do usuário
  try {
    const resposta = await fetch(`https://681cf109f74de1d219ae55cf.mockapi.io/usuarios/Usuarios/${usuarioLocal.id}`);
    if (!resposta.ok) throw new Error("Erro ao buscar usuário");

    // Converte a resposta em JSON em um objeto JS
    const usuario = await resposta.json();

    // Seleciona os elementos de acordo com as classes
    document.querySelector('.nome').textContent = usuario.nome;
    const detalhes = document.querySelector('.detalhes');
    detalhes.innerHTML = `
        <p><strong>Nome:</strong> ${usuario.nome}</p>
        <p><strong>Email:</strong> ${usuario.email}</p>
      `;
  } catch (erro) {
    console.error("Erro ao carregar usuário:", erro);
    alert("Erro ao carregar dados do usuário.");
  }
});

// Adiciona o Evento de Clique ao botão deletar dentro do HTML.
// Realizando uma função
document.getElementById("deletar").addEventListener("click", () => {
  const confirmar = confirm("Tem certeza que deseja deletar sua conta?");
  if (confirmar) {
    const usuarioLocal = JSON.parse(localStorage.getItem("usuarioLogado"));
    // Simplifica o código e evita erros de execução
    const usuarioId = usuarioLocal?.id;

    if (!usuarioId) {
      alert("Usuário não identificado.");
      return;
    }

    // Requisição para a API apagar do Banco de Dados
    fetch(`https://681cf109f74de1d219ae55cf.mockapi.io/usuarios/Usuarios/${usuarioId}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
          alert("Conta deletada com sucesso.");
          localStorage.removeItem("usuarioLogado");
          window.location.href = "../login/cadastro/cadastro/index.html";
        } else {
          alert("Erro ao deletar a conta.");
        }
      })
      .catch(error => {
        console.error("Erro na requisição:", error);
        alert("Erro ao deletar a conta.");
      });
  }
});

// Chama a página Alterar Dados
document.getElementById("alterar").addEventListener("click", () => {
  window.location.href = "alterar-dados.html";
});

// Remove os dados de Login
document.getElementById("sair").addEventListener("click", () => {
  localStorage.removeItem("usuarioLogado"); 
  window.location.href = "../home/index.html";
});