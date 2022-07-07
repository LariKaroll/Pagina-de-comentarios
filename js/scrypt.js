function comentarios() {
    // Declaração de variáveis
    let nome = document.getElementById('nome').value;
    let comentario = document.getElementById('comentario').value;
    let corTexto = document.getElementById('cor-texto').value;
    let corFundo = document.getElementById('cor-fundo').value;
    let result = document.getElementById('result');

    result.innerHTML += '<div class="result" style="color:'+corTexto+'; background-color:'+corFundo+';"><strong>'+nome+'</strong><hr /><br />'+comentario+'</div>' ;

    document.getElementById('nome').value = '';
    document.getElementById('comentario').value = '';
 }