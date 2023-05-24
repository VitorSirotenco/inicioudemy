$(function(){
    $('#l1').click(function(){ //quando o link 1 for clicado, a imagem 1 será mostrada e as outras escondidas
        $('#i1').show(); //função pra mostar
        $('#i2').hide(); //função pra esconder
        $('#i3').hide();
        $('#i4').hide();
    })
})

$(function(){
    $('#l2').click(function(){
        $('#i2').show();
        $('#i1').hide();
        $('#i3').hide();
        $('#i4').hide();
    })
})


$(function(){
    $('#l3').click(function(){
        $('#i3').show();
        $('#i1').hide();
        $('#i2').hide();
        $('#i4').hide();
    })
})

$(function(){
    $('#l4').click(function(){
        $('#i4').show();
        $('#i1').hide();
        $('#i3').hide();
        $('#i2').hide();
    })
})