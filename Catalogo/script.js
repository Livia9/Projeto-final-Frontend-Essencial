const produtos = [
    {
        id: 1,
        nome: "Pokébola do Ash",
        descricao: "A Pokébola usada para capturar o Pikachu. Um item lendário para verdadeiros mestres Pokémon.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkF--8an5l0NvjOU_Q_xnFdAFzzfkXA80i-Q&s",
        preco: 599.99,
        categoria: "Relíquias",
        corDestaque: "green"
    },
    {
        id: 2,
        nome: "Sabre de Luz do Luke",
        descricao: "O sabre de luz usado por Luke Skywalker na luta contra Darth Vader. Um item essencial para qualquer Jedi.",
        imagem: "https://static.wixstatic.com/media/4d15e0_d586a245ddf44ab396f5d31bf243532c~mv2.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4d15e0_d586a245ddf44ab396f5d31bf243532c~mv2.png",
        preco: 799.99,
        categoria: "Artefatos",
        corDestaque: "blue"
      },
      {
        id: 3,
        nome: "Um Anel para Todos Governar",
        descricao: "O anel único que controla todos os outros anéis. Um item poderoso e perigoso.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/4/45/Unico_Anello.jpg",
        preco: 599.99,
        categoria: "Relíquias",
        corDestaque: "red"
      },
      {
        id: 4,
        nome: "Varinha do Harry Potter",
        descricao: "Conhecida como a Varinha das Varinhas, é feita de azevinho, tem 28 centímetros e possui um núcleo de pena de fênix. Essa pena é da fênix de Dumbledore, Fawkes, e apenas a varinha de Voldemort também possui este núcleo.",
        imagem: "https://cdn.awsli.com.br/600x450/2437/2437567/produto/165083582/7233cb99e1.jpg",
        preco: 199.99,
        categoria: "Artefatos",
        corDestaque: "yellow"
      },
      {
        id: 5,
        nome: "Misa's Death Note",
        descricao: "Versão alternativa do caderno que aterroriza criminosos. Apenas decorativo, eu espero.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Death_Note_Book_Misa.jpg",
        preco: 299.99,
        categoria: "Relíquias",
        corDestaque: "purple"
      },
      {
        id: 6,
        nome: "Chapéu de Palha do Luffy",
        descricao: "O lendário chapéu herdado de Shanks. Ideal para quem quer ser Rei dos Piratas.",
        imagem: "https://down-br.img.susercontent.com/file/br-11134207-7r98s-lmeppegwolpy6a",
        preco: 359.99,
        categoria: "Artefatos",
        corDestaque: "orange"
      },
      {
        id: 7,
        nome: "Kunai do Minato",
        descricao: "Usado quando Minato lançou uma kunai com selo de teletransporte na direção de Obito, que tentou se materializar para intervir, mas Minato se teleportou para a kunai e acertou Obito com um Rasengan.",
        imagem: "https://cdn.awsli.com.br/600x450/2437/2437567/produto/165083582/7233cb99e1.jpg",
        preco: 1099.99,
        categoria: "Relíquias",
        corDestaque: "black"
      },
      {
        id: 8,
        nome: "Equipamento DMT",
        descricao: "As espadas retráteis do Equipamento de Manobra Tridimensional (DMT) de Shingeki No Kyojin são um componente essencial deste equipamento, que permite aos soldados se movimentar e lutar em um espaço 3D contra os Titãs.",
        imagem: "https://ae01.alicdn.com/kf/Sb5d3bb8db04e457c920c5f4c710e8cf8O.jpg",
        preco: 2799.99,
        categoria: "Relíquias",
        corDestaque: "gray"
      },
    {
        id: 9,
        nome: "Nichirin Giyu Tomioka",
        descricao: "Usada por Giyu de Kimetsu no Yaiba, uma katana elegante e imponente...",
        imagem: "https://cdn.awsli.com.br/600x450/1056/1056662/produto/173287583/64ee993ccb.jpg",
        preco: 6999.99,
        categoria: "Relíquias",
        corDestaque: "gray"
    }
  ];

const coresTailwind = {
        green: { 
        border: 'border-green-500', 
        text: 'text-green-400', 
        bg: 'bg-green-600',
        hover: 'hover:bg-green-700'
    },
        blue: {
        border: 'border-blue-500',
        text: 'text-blue-400',
        bg: 'bg-blue-600',
        hover: 'hover:bg-blue-700'
    },
        red: {
        border: 'border-red-500',
        text: 'text-red-400',
        bg: 'bg-red-600',
        hover: 'hover:bg-red-700'
    },
        yellow: {
        border: 'border-yellow-500',
        text: 'text-yellow-400',
        bg: 'bg-yellow-600',
        hover: 'hover:bg-yellow-700'
    },
        purple: {
        border: 'border-purple-500',
        text: 'text-purple-400',
         bg: 'bg-purple-600',
        hover: 'hover:bg-purple-700'
    },
        orange: {
        border: 'border-orange-500',
        text: 'text-orange-400',
        bg: 'bg-orange-600',
        hover: 'hover:bg-orange-700'
    },
        black: {
        border: 'border-black-500',
        text: 'text-black-400',
        bg: 'bg-black-600',
        hover: 'hover:bg-black-700'
    },
        gray: {
        border: 'border-gray-500',
        text: 'text-gray-400',
        bg: 'bg-gray-600',
        hover: 'hover:bg-gray-700'
    }
  };

  function renderizarProdutos(produtos) {
    const container = document.getElementById('produtos-container');
    container.innerHTML = ''; 
    
    produtos.forEach(produto => {
      const cor = coresTailwind[produto.corDestaque] || coresTailwind.green;
      const card = `
        <div class="bg-gray-800 ${cor.border} rounded-xl p-4 shadow-lg hover:scale-105 transition-transform">
          <img src="${produto.imagem}" alt="${produto.nome}" 
               class="mx-auto mb-4 rounded-md h-48 w-48 object-cover">
          <h2 class="text-xl font-semibold ${cor.text}">${produto.nome}</h2>
          <p class="text-sm text-gray-300 mt-1">${produto.descricao}</p>
          <p class="text-lg font-bold ${cor.text} mt-2">R$ ${produto.preco.toFixed(2)}</p>
          <button class="mt-4 ${cor.bg} hover:${cor.bg.replace('6', '7')} 
                  text-white py-2 px-4 rounded w-full transition-colors">
            Adquirir
          </button>
        </div>
      `;
      container.innerHTML += card;
    });
  }

  function carregarProdutos() {
    try {
      renderizarProdutos(produtos);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      document.getElementById('produtos-container').innerHTML = `
        <div class="col-span-3 text-center text-red-500">
          Erro ao carregar os produtos. Recarregue a página.
        </div>`;
    }

    function filtrarPorCategoria(categoria) {
        const produtosFiltrados = categoria === 'todos' 
          ? produtos 
          : produtos.filter(produto => produto.categoria === categoria);
        
        renderizarProdutos(produtosFiltrados);
      }
  }

  window.addEventListener('DOMContentLoaded', carregarProdutos);