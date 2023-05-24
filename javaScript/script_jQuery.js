// $(seletor).ação();  sintaxe do jQuery
$(document).ready(function () {   //para ver se o documento esta pronto
    $('#esconder').click(function () {  // para selecionar o seletor botao e depois acionar uma ação apos o clique
        $('h1').hide(); //esconder o H1 através da fução hide
    });
});


$('#vermelho').click(function () {
    $('h2').css('color', 'red'); //mudar as propriedades através da funcao css, que tem como parametro 1 = a propriedade que vc quer trocar e 2= o novo valor da msm
    $('h2').fadeOut(); //função para desaparecer suavemente
    $('h2').delay(2000); //tempo dado em milisegundos, ou seja 2 segundos aq
    $('h2').fadeIn(); //para voltar a aparecer oq tinha sumido
    $('#mensagem').text("Cor alterada com sucesso!"); //irá aparecer uma mensagem que a cor foi alterada 
    $('#mensagem').css('color', 'red');
    $('button').removeClass('red'); //pra remover a classe red declarada no html
});

$('#azul').click(function () {
    $('h2').css('color', 'blue'); //mudar as propriedades através da funcao css, que tem como parametro 1 = a propriedade que vc quer trocar e 2= o novo valor da msm
    $('h2').fadeOut(); //função para desaparecer suavemente
    $('h2').delay(2000); //tempo dado em milisegundos, ou seja 2 segundos aq
    $('h2').fadeIn(); //para voltar a aparecer oq tinha sumido
    $('#mensagem')
        .text("Cor alterada com sucesso!")
        .css({color: 'blue', border: '1px solid blue', backgroundColor:'#836fff'})// para nao chamar a propriedade css mais de uma vez, usar as {} para definir as propriedades dentro das chaves
        .delay(2000)
        .fadeOut() //encadeamento, não é preciso chamar a mesma variavel várias vezes.
        .addClass('blue');//classe que foi add la do html
});

