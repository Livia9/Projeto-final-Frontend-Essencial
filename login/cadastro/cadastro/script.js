document.getElementById("cadastroBox").addEventListener("submit", cadastrar);

async function cadastrar(e) { // função para cadastrar
    e.preventDefault(); // impede de enviar e recarregar sem validar os dados antes
    var emailInput = document.getElementById("inputEmail").value.trim();
    var senhaInput = document.getElementById("inputSenha").value.trim();
    var nomeInput = document.getElementById("inputNome").value.trim();
    var urlBase = `https://681cf109f74de1d219ae55cf.mockapi.io/usuarios/Usuarios`; //url da api

    var usuario = {
        nome: nomeInput,
        email: emailInput,
        senha: senhaInput,
        carrinho: [],  //para usar no carrinho depois
    };

    if (!emailInput || !senhaInput || !nomeInput) {
        Swal.fire({ // os alertas personalizados do sweet alert 2
            icon: "warning",
            title: "Atenção!",
            text: "Preencha todos os campos! 🔮",
        });
        return;
    }

    try {
        var response = await fetch(urlBase, {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify(usuario),
        });

        if (response.ok) {
            Swal.fire({
                icon: "success",
                title: "Cadastrado!",
                text: "Usuário cadastrado com sucesso! ✨",
            }).then(() => { // o then serve pra direcionar o usuario so depois que ele apertar ok no alerta 
                window.location.href = "../login/index.html"; // manda para o login
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Erro",
                text: "Erro interno, tente novamente mais tarde... ",
            });
        }
    } catch (error) {
        console.error("Erro:", error); // adicionei pra ver o erro que dá pelo console da web
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Erro ao tentar cadastrar usuário. 🧙‍♂️",
        });
    }
}
