function criaCartao(categoria, pergunta, resposta) {
    let container = document.getAnimations('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao'

    cartao.inenerHTML = `
    <div class="cartao__conteudo">
    <h3>${CATEGORIA}</h3>
    <Div class="cartao__conteudo__pergunta">
    <p> </p> ${pergunta}</p>
    </Div>
    <div class="cartao__conteudo__resposta">
    <p> </p> ${resposta}</p>
    </div>
    </div> `

container.appenChild(cartao)

}