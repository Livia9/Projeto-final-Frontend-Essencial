window.onload = function() { //função para evitar de perfil logado entrar na home 1
    const usuarioLogado = localStorage.getItem("usuarioLogado"); //pega o usuario logado da localStorage
    if (usuarioLogado) {
        window.location.href = "./index2.html"; // se o usuario estiver logado, vai para home de perfil logado
    }
};