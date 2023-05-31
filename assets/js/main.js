import { produtos } from "../../data/produtos.js";

console.log(produtos)

const containerPrincipal = document.querySelector('.container-principal');

const widthTela = window.innerWidth;



const carregaCategoriaProdutos = () => {
    containerPrincipal.innerHTML = '';
    produtos.forEach(categoria => {
        let novaCategoria = document.createElement('section');
        novaCategoria.classList.add('categoria-wrapper');
        novaCategoria.innerHTML = `
            <div class="categoria-header">
                <h3>${categoria.categoria}</h3>
                <a href="#">Ver tudo <i class="fa-sharp fa-solid fa-arrow-right"></i></i></a>
            </div>       
        `;
        let produtosWrapper = document.createElement('div');
        produtosWrapper.classList.add('categoria-cards');

        if (window.innerWidth <= 1280 && window.innerWidth > 900) {
            for (let i = 0; i < 5; i++) {
                let novoProduto = document.createElement('div');
                novoProduto.classList.add('card-wrapper');
                novoProduto.innerHTML = `
                    <img src="${categoria.produtos[i].img}" class="card-image">
                    <h2>${categoria.produtos[i].produto}</h2>
                    <span>R$ ${categoria.produtos[i].preco}</span>
                    <a href="#">Ver produto</a>
                `
    
                produtosWrapper.appendChild(novoProduto);
            }
        } else if (window.innerWidth <= 900) {
            for (let i = 0; i < 4; i++) {
                let novoProduto = document.createElement('div');
                novoProduto.classList.add('card-wrapper');
                novoProduto.innerHTML = `
                    <img src="${categoria.produtos[i].img}" class="card-image">
                    <h2>${categoria.produtos[i].produto}</h2>
                    <span>R$ ${categoria.produtos[i].preco}</span>
                    <a href="#">Ver produto</a>
                `
    
                produtosWrapper.appendChild(novoProduto);
            }
        } else {
            categoria.produtos.forEach(produto => {
                let novoProduto = document.createElement('div');
                novoProduto.classList.add('card-wrapper');
                novoProduto.innerHTML = `
                    <img src="${produto.img}" class="card-image">
                    <h2>${produto.produto}</h2>
                    <span>R$ ${produto.preco}</span>
                    <a href="#">Ver produto</a>
                `
    
                produtosWrapper.appendChild(novoProduto);
            })
        }

        

        novaCategoria.appendChild(produtosWrapper);

        containerPrincipal.appendChild(novaCategoria);
    });
}

carregaCategoriaProdutos();
window.addEventListener('resize', carregaCategoriaProdutos);