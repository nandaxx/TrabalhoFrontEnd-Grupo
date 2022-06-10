
function validar() {

    var nome = document.getElementById("nome1").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("phone").value;
    var titulo = document.getElementById("subject").value;
    var mensagem = document.getElementById("message").value;
    if (nome === "") {
        return alert("Digite um nome com mais que 3 caracteres");

    }
    else if (email === "") {
        return alert("Por favor, Digite um Email");

    }
    else if (telefone === "") {
        return alert("Por favor, Digite um Telefone");

    }
    else if (titulo === "") {
        return alert("Por favor, Digite um Título");

    }
    else if (mensagem === "") {
        return alert("Por favor, Digite uma Mensagem");

    }
    else {
        return alert("Mensagem enviada com sucesso");

    }
}