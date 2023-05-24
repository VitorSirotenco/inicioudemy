function valida(){
    var nome = document.getElementById('nome');

    if (nome.value == ""){
        alert("Campo nome não pode ser enviado em branco")
    }else{
        alert("Seu formulario foi enviado com sucesso")
    }
}