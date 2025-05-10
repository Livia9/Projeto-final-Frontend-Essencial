document.getElementById("loginBox").addEventListener("submit", logar)

async function logar(e) { //função para logar
    e.preventDefault();

    const emailInserido = document.getElementById("inputEmail").value;
    const senhaInserida = document.getElementById("inputSenha").value;

    const url = "https://681cf109f74de1d219ae55cf.mockapi.io/usuarios/Usuarios";

    try {
        const dados = await fetch(url); // aqui carrega os dados da api
        const usuarios = await dados.json(); //transforma os dados json em objeto

        const usuario = usuarios.find((usuario) => usuario.email === emailInserido);

        if (usuario && usuario.senha === senhaInserida) {
            localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
            Swal.fire({ //alertas personalizados aqui também
                icon: "success",
                title: "Login bem-sucedido!",
                text: "Bem-vindo à Artefairy! ✨",
            });
            window.location.href = "../../../home/index2.html";
        } else { // se cair aqui, o erro envolve oque está sendo informado
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email ou senha incorretos! 🧙‍♂️",
            });
        }
    } catch (error) { //se cair aqui, o erro que envolve a api ou alguma coisa assim 
        Swal.fire({
            icon: "error",
            title: "Erro",
            text: "Erro interno, tente novamente mais tarde... ",
        });
    }
};
