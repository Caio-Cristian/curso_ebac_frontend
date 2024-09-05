const produtos = document.querySelectorAll('.produtos__item');

// Adiciona um evento de clique a cada item
produtos.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe 'produtos__item--em-destaque' de todos os itens
        produtos.forEach(produto => {
            produto.classList.remove('produtos__item--em-destaque');
        })
        // Adiciona a classe 'produtos__item--em-destaque' ao item clicado
        item.classList.add('produtos__item--em-destaque');
    });
});

