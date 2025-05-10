// Este é a base pra criação dos objetos produtos
class Produto {
    constructor(id, nome, descricao, universo, preco) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.universo = universo;
        this.preco = preco;
    }
}

// A array que armazena os produtos e uma função pra fazer o cadastro de produtos
const listaDeProdutos = [];
function cadastrarProduto(nome, descricao, universo, preco) {
    const id = listaDeProdutos.length + 1;
    const produto = new Produto(id, nome, descricao, universo, preco);
    listaDeProdutos.push(produto);
}

// Cadastro de diversos produtos
cadastrarProduto("Pokébola do Ash", "A Pokébola usada para capturar o Pikachu. Um item lendário para verdadeiros mestres Pokémon.", "Pokemon", 8500.00);
cadastrarProduto("Sabre de Luz do Luke", "Arma icônica da saga Star Wars, empunhada por Luke Skywalker", "StarWars", 800000.00);
cadastrarProduto("Um Anel para Todos", "O Anel do Sauron, forjado nas chamas da Montanha da Perdição. Perigoso e cobiçado.", "Senhor do Aneis", 30000.00);
cadastrarProduto("Varinha do Harry Potter", "Relíquia mágica usada na Batalha de Hogwarts. Canalize feitiços com estilo.", "HarryPotter", 10139);
cadastrarProduto("Death Note da Misa", "Versão alternativa do caderno que aterroriza criminosos. Apenas decorativo, prometo.", "Death Note", 100000.00);
cadastrarProduto("Chapéu de Palha do Luffy", "O lendário chapéu herdado de Shanks. Ideal para quem quer ser Rei dos Piratas.", "One Piece", 98000.00);
cadastrarProduto("Kunai do Minato", "Utilizada exclusivamente por Minato Namikaze em conjunto com seu Ninjutsu Espaço–Tempo: A Técnica do Deus Voador do Trovão.", "Naruto", 9000.00);
cadastrarProduto("Equipamento DMT - Shingeki No Kyojin", "As espadas retráteis do Equipamento de Manobra Tridimensional (DMT) de Attack on Titan são um componente essencial deste equipamento, que permite aos soldados se movimentar e lutar em um espaço 3D contra os Titãs.", "Attack on Titan", 1000000.00);
cadastrarProduto("Nichirin - Kimetsu no Yaiba", "Usadas pelos Caçadores de Demônios, essas lâminas são capazes de mudar de cor e são utilizadas para derrotar os mesmos.", "Demon Slayer", 100000.00);
cadastrarProduto("Escudo do Capitão América", "O icônico escudo de vibranium utilizado por Steve Rogers para defesa e ataque.", "Marvel", 250000.00);
cadastrarProduto("Mjölnir do Thor", "O poderoso martelo encantado do deus do trovão, empunhado apenas pelos dignos.", "Marvel", 500000.00);
cadastrarProduto("Maçã Dourada Encantada", "A lendária maçã dourada do Minecraft que concede regeneração e resistência.", "Minecraft", 5030);
cadastrarProduto("Armadura do Homem de Ferro Mark 50", "Traje avançado com nanotecnologia usado por Tony Stark.", "Marvel", 2000000.00);
cadastrarProduto("Anel do Lanterna Verde", "Anel energético que concede poderes ilimitados com base na força de vontade.", "DC Comics", 350000.00);
cadastrarProduto("Batarang do Batman", "Arma de arremesso em formato de morcego, usada para combate e distrações.", "DC Comics", 7500.00);
cadastrarProduto("Laço da Verdade da Mulher-Maravilha", "Força mágica que obriga qualquer um a dizer a verdade.", "DC Comics", 150000.00);
cadastrarProduto("Tridente de Poseidon", "Arma mítica empunhada por Aquaman para controlar os mares.", "DC Comics", 300000.00);
cadastrarProduto("Cubo do Rubik de Rick", "Gadget multiuniversal criado por Rick Sanchez com funções imprevisíveis.", "Rick and Morty", 120000.00);
cadastrarProduto("Portal Gun", "Arma que permite criar portais para qualquer dimensão do multiverso.", "Rick and Morty", 450000.00);
cadastrarProduto("Diário 3 do Dipper", "Contém segredos paranormais e criaturas misteriosas de Gravity Falls.", "Gravity Falls", 180000.00);
cadastrarProduto("Espada de Cristal da Rose", "Arma elegante e poderosa usada pelas Crystal Gems.", "Steven Universe", 110000.00);
cadastrarProduto("Garra do Wolverine", "Réplicas metálicas das garras do mutante mais temido dos X-Men.", "Marvel", 92000.00);
cadastrarProduto("Pokédex de Kanto", "Dispositivo usado para catalogar e estudar Pokémon.", "Pokemon", 30000.00);
cadastrarProduto("Capa da Invisibilidade", "Item lendário da família Potter que torna o usuário invisível.", "Harry Potter", 800000.00);
cadastrarProduto("Cajado do Gandalf", "Instrumento mágico usado pelo mago para conjurar feitiços poderosos.", "Senhor do Aneis", 200000.00);
cadastrarProduto("Espada Andúril", "A espada reforjada de Narsil, empunhada por Aragorn.", "Senhor do Aneis", 320000.00);
cadastrarProduto("TARDIS", "Nave do Doutor que viaja pelo tempo e espaço, com aparência de cabine telefônica.", "Doctor Who", 10000000.00);
cadastrarProduto("Chave Espada do Sora", "Arma mágica em formato de chave usada para combater as trevas.", "Kingdom Hearts", 95000.00);
cadastrarProduto("Omnitrix", "Dispositivo alienígena que permite transformar-se em diversas espécies.", "Ben 10", 600000.00);
cadastrarProduto("Caneta Sônica", "Ferramenta versátil usada pelo Doutor para múltiplas funções tecnológicas.", "Doctor Who", 85000.00);
cadastrarProduto("Caderno do Levi", "Caderno de estratégias e anotações do capitão mais habilidoso da Tropa de Exploração.", "Attack on Titan", 30000.00);
cadastrarProduto("Espada do Trunks", "Espada longa empunhada pelo guerreiro viajante do tempo.", "Dragon Ball", 180000.00);
cadastrarProduto("Radar do Dragão", "Dispositivo usado para encontrar as Esferas do Dragão.", "Dragon Ball", 25000.00);
cadastrarProduto("Máscara do Kaneki", "Máscara simbólica usada por Ken Kaneki em batalhas ghouls.", "Tokyo Ghoul", 18000.00);
cadastrarProduto("Máscara de Hollow do Ichigo", "Item que representa o lado Hollow de Ichigo em batalhas intensas.", "Bleach", 54000.00);
cadastrarProduto("Espada Zangetsu", "A poderosa zanpakutō de Ichigo Kurosaki, com imenso poder espiritual.", "Bleach", 220000.00);
cadastrarProduto("Caixa de Demônios da Nezuko", "Caixa portátil onde Nezuko é transportada com segurança pelo irmão.", "Demon Slayer", 47000.00);
cadastrarProduto("Bola do Dragão de 4 Estrelas", "Esfera do Dragão guardada por Goku desde sua infância.", "Dragon Ball", 90000.00);
cadastrarProduto("Bracelete de Cardcaptor Sakura", "Acessório mágico usado para ativar as Cartas Clow.", "Cardcaptor Sakura", 88000.00);
cadastrarProduto("Anel dos Cavaleiros de Ouro", "Símbolo de status e poder entre os Cavaleiros do Zodíaco.", "Cavaleiros do Zodíaco", 190000.00);
cadastrarProduto("Pingente da Sailor Moon", "Amuleto usado por Usagi para transformações e ataques lunares.", "Sailor Moon", 76000.00);
cadastrarProduto("Colar de Pérolas do InuYasha", "Colar usado para controlar os impulsos do meio-youkai InuYasha.", "InuYasha", 39000.00);
cadastrarProduto("Caixa de Pandora", "Contém o Cosmo mais puro e perigoso, usada por Athena.", "Cavaleiros do Zodíaco", 990000.00);
cadastrarProduto("Cartão Exodia", "Peça fundamental para a vitória instantânea no duelo de monstros.", "Yu-Gi-Oh!", 150000.00);
cadastrarProduto("Pingente do Millennium", "Artefato místico que permite ver o coração das pessoas.", "Yu-Gi-Oh!", 110000.00);
cadastrarProduto("Spray de Repulsão de Zumbis", "Equipamento de sobrevivência padrão de The Walking Dead.", "The Walking Dead", 25000.00);
cadastrarProduto("Bastão Lucille", "Taco de beisebol envolto em arame farpado, usado por Negan.", "The Walking Dead", 36000.00);
cadastrarProduto("Arco da Katniss", "Arma de precisão usada pela protagonista para vencer os Jogos Vorazes.", "Jogos Vorazes", 68000.00);
cadastrarProduto("Insígnia do Distrito 12", "Símbolo da revolução de Panem, usado por Katniss.", "Jogos Vorazes", 24000.00);
cadastrarProduto("Relógio do Ben Tennyson", "Permite acesso rápido ao Omnitrix e mudanças rápidas entre aliens.", "Ben 10", 530000.00);
cadastrarProduto("Cartucho do Mario", "Item pixelado capaz de conceder superpoderes momentâneos.", "Mario Bros", 12000.00);
cadastrarProduto("Flauta de Ocarina", "Flauta mágica usada por Link para manipular o tempo e espaço.", "The Legend of Zelda", 48000.00);
cadastrarProduto("Máscara de Majora", "Item sombrio e misterioso com poder caótico.", "The Legend of Zelda", 175000.00);
cadastrarProduto("Machado Leviatã", "Arma poderosa e encantada usada por Kratos.", "God of War", 430000.00);
cadastrarProduto("Anel do Clow", "Item mágico para transformar cartas de Clow em Cartas Sakura.", "Cardcaptor Sakura", 89000.00);
cadastrarProduto("Espelho da Verdade", "Reflete o coração verdadeiro de quem o encara.", "Fullmetal Alchemist", 76000.00);
cadastrarProduto("Pedra Filosofal", "Fonte de poder alquímico absoluto, usada para reviver ou criar vida.", "Fullmetal Alchemist", 1000000.00);
cadastrarProduto("Manto de Akatsuki", "Traje usado por ninjas renegados em busca do domínio mundial.", "Naruto", 67000.00);

let idCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(id) {
    if (!idCarrinho.includes(id)) {
        idCarrinho.push(id);
        localStorage.setItem("carrinho", JSON.stringify(idCarrinho));
    } else {
        alert("Produto já foi adicionado ao carrinho!");
    }
}

function removerCarrinho(id) {
    id = Number(id);
    idCarrinho = idCarrinho.filter(item => item !== id);
    localStorage.setItem("carrinho", JSON.stringify(idCarrinho));
}

function exibirProdutosDoCarrinho() {
    const dadosProduto = document.getElementById("listaDeProdutos");
    const totalDiv = document.getElementById("total");
    dadosProduto.innerHTML = "";

    let total = 0;

    listaDeProdutos.forEach(produto => {
        if (idCarrinho.includes(produto.id)) {
            total += produto.preco;

            const divProduto = document.createElement("div");
            divProduto.classList.add("produto");
            divProduto.innerHTML = `
                <h2>${produto.nome}</h2>
                <p><strong>Descrição:</strong> ${produto.descricao}</p>
                <p><strong>Universo:</strong> ${produto.universo}</p>
                <p class="valor"><strong>Preço:</strong> Ƶ ${produto.preco.toFixed(2)}</p>
                <button onclick="removerCarrinho(${produto.id}); exibirProdutosDoCarrinho();">Remover</button>
            `;
            dadosProduto.appendChild(divProduto);
        }
    });

    totalDiv.innerHTML = `
        <h3>Valor Total</h3>
        <p class="cart-total">Ƶ ${total.toFixed(2)}</p>
    `;
}

exibirProdutosDoCarrinho();