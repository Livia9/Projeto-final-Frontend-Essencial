<p align="center"> <img src="artefairy.png" width="100" height="100" alt="E-commerce ArteFairy-logo"></p>
<h1 align="center">ArteFairy</h1>

O **ArteFairy** é um e-commerce temático fictício que simula a venda de artefatos inspirados em diferentes universos da cultura pop, como filmes, séries e jogos.  

Entre os produtos disponíveis estão itens como:  
- 🍎 **Maçã Dourada** do Minecraft  
- ⚡ **Varinha das Varinhas** de Harry Potter   
- 🔴 **Pokébola** do Ash de Pokémon  
- 🗡️ **Sabre de Luz** do Luke de Star Wars

Desenvolvido como trabalho final da disciplina de Front End Essencial, o projeto aplica conceitos de **HTML**, **CSS**, **JavaScript** e **Bootstrap**, com foco em boas práticas de desenvolvimento web e uso de **API** para simular funcionalidades reais de um site de comércio eletrônico.

## 👩‍💻 **Contribuidoras**

| Nome      | Contribuição | GitHub |
|-----------|--------------|--------|
| **Dandara Lima** | Página de Perfil | [@dandara](https://github.com/dandaralimaf) |
| **Lívia Raissinger**   | Página Home | [@livia](https://github.com/livia9) |
| **Maria Aragão**   | Carrinho de Compras e Página de Produtos | [@maria](https://github.com/Maria-S-Aragao) |
| **Rayca Thais**   | Sistema de Login/Cadastro | [@rayca](https://github.com/raycaThais) |
| **Sabrina Siqueira** | Catálogo, Exposição de Animes e Logo do E-commerce | [@sabrina](https://github.com/Sai-czs) |

## 🛠️ **Tecnologias Utilizadas**  
| **Tecnologia**       | **Uso**                                                                 |
|----------------------|-------------------------------------------------------------------------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Estrutura semântica do site |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Estilização com efeitos mágicos |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Lógica de produtos/carrinho |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white) | *Apenas no header e em alguns icones do site* |
| ![LocalStorage](https://img.shields.io/badge/LocalStorage-FFD700?style=for-the-badge&logo=html5&logoColor=white) | Persistência do carrinho |
| ![API](https://img.shields.io/badge/API-6DB33F?style=for-the-badge&logo=postman&logoColor=white) | Simulação de banco de dados e gestão de produtos |

## 📁 **Organização do Projeto**
    
├── 📁 carrinho_de_compras/PageCart(Página de exibição do carrinho de compras)    
│   ├── index.html  
│   ├── script.js    
│   └── style.css   
        
├── 📁 Catalogo(Catálogo geral de produtos disponíveis)    
│   ├── index.html  
│   ├── script.js    
│   └── style.css    
     
├── 📁 Exposicao_de_Animes(Seção dedicada a divulgação de exposições de animes)   
│   ├── index.html  
│   └── Style.css   

├── 📁 home(Página inicial e seus recursos)   
│   ├── assets/ (Imagens, ícones e mídias do projeto)     
│   ├── index.html(Página principal para usuarios sem cadastro)   
│   ├── index2.html(Variação da home para usuarios cadastrados no site)     
│   ├── script.js    
│   ├── script2.js     
│   └── stylehome.css     
     
├── 📁 login/cadastro(Funcionalidade de autenticação)   
│   ├── 📁 cadastro/(Página de registro de novos usuários)  
│        ├── index.html   
│        ├── script.js     
│        └── style.css    
│   └── 📁 login/(Página de login de usuários)   
│       ├── index.html   
│       ├── script.js     
│       └── style.css    
    
├── 📁 Perfil(Área do perfil do usuário logado)     
│   ├── alterar-dados.css  
│   ├── alterar-dados.html  
│   ├── alterar-dados.js    
│   ├── index.html(Página principal do perfil)      
│   ├── script.js     
│   └── style.css       
    
├── 📁 Produtos  
│   └── index.html   
  
├──> index.html **Arquivo base/root da aplicação**    
├──> script.js **Scripts auxiliares globais**   
└──> style.css **Estilo base ou geral do projeto**  


## 🚀 Como Executar

1. Clone o repositório
2. Abra o arquivo index.html da pasta "home" no navegador

## 📌 Considerações Finais

O desenvolvimento do **ArteFairy** foi uma oportunidade valiosa para consolidar conhecimentos essenciais de front-end e colocar em prática boas práticas de desenvolvimento.  

### 🎯 Principais Realizações  
- **Fluxo de E-commerce Completo**: do catálogo à finalização do carrinho, com navegação fluida e usabilidade aprimorada.  
- **Persistência de Dados**: uso inteligente de **LocalStorage** para manter o estado do carrinho entre sessões.  
- **Arquitetura Modular**: cada funcionalidade isolada em pastas e arquivos específicos, facilitando a manutenção e escalabilidade.  
- **Design Coerente**: sistema de identidade visual consistente, com paleta de cores temática e componentes reutilizáveis.  

### 🔧 Desafios Superados  
- **Sincronização de Estado** entre páginas distintas, garantindo que o carrinho reflita alterações em tempo real.  
- **Validação de Formulários** no client-side, com feedback imediato ao usuário.  
- **Otimização de Performance** para dispositivos móveis, reduzindo tempos de carregamento e melhorando a experiência em telas menores.  

### 📚 Lições Aprendidas  
- **Versionamento Colaborativo**: importância de fluxos de trabalho baseados em Git/GitHub para coordenação de equipe.  
- **Documentação Clara**: comentários e READMEs detalhados agilizam a compreensão e integração de novos colaboradores.  
- **Testes Multiplataforma**: verificar a consistência e responsividade em diferentes navegadores e dispositivos.
- **Acessibilidade**: compreensão da importância de tornar os sites acessíveis para todos os usuários.  
