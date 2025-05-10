window.onload = function () {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!usuarioLogado) { //se o usuario nao estiver logado, vai para a home de perfil deslogado
        window.location.href = "./index.html";
    }
};

let idCarrinhoLocalStorage = JSON.parse(localStorage.getItem("id")) || [];

let cards = document.querySelectorAll(".buttonCart");

cards.forEach(buttonCart => {
    let idProduto = buttonCart.getAttribute("data-id");
    let icon = buttonCart.querySelector("i");


    if (idCarrinhoLocalStorage.includes(idProduto)) {
        icon.classList.remove("bi-cart-plus");
        icon.classList.add("bi-cart-check-fill");
    }

    buttonCart.addEventListener("click", function () {
        if (icon.classList.contains("bi-cart-plus")) {
            icon.classList.remove("bi-cart-plus");
            icon.classList.add("bi-cart-check-fill");
            alert("Produto adicionado ao carrinho com sucesso!");

            idCarrinhoLocalStorage.push(idProduto);
            localStorage.setItem("id", JSON.stringify(idCarrinhoLocalStorage));
        } else {
            alert("Produto já foi adicionado ao carrinho!");
        }
    });
});