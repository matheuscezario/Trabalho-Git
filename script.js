function saudarEstudante() {
    // Captura o valor do input pelo ID
    var nome = document.getElementById("campoNome").value;

    // Valida se não está vazio
    if (nome == "") {
        alert("Por favor, digite seu nome!");
    } else {
        // Exibe a saudação na tela
        document.getElementById("mensagemSaida").innerHTML = "Bem-vindo ao ambiente de dev, " + nome + "!";
    }
}