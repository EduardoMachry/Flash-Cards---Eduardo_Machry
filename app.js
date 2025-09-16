function criaCartao(categoria, pergunta, resposta) {
    let container = document.getAnimations('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao'

    cartao.inenerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
    <p> ${pergunta} </p>
    </Div>
    <div class="cartao__conteudo__resposta">
    <p> ${resposta}</p> 
    </div>
    </div> `

container.appenChild(cartao)

}