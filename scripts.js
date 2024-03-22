var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var telefone = document.getElementById("telefone");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");



function alertar(event){
    if(true){
        //alert("Você clicou no botão!!!" + " " + nome.value);
        const url = `https://viacep.com.br/ws/${cep.valuej}/json/`;


        fetch(url)
        .then(resposta=>resposta.json())
        .then(dados=>alert(dados.logradouro))
        


        saida.innerText = "Nome: " + nome.value +
        "\n Email: " + email.value +
        "\n Cep: " + cep.value + 
        "\n Logradouro: " + logradouro.value +
        "\n Telefone: " + telefone.value +
        "\n Numero: " + numero.value +
        "\n Complemento: " + complemento.value +
        "\n Bairro: " + bairro.value +
        "\n Cidade: " + cidade.value +
        "\n Estado: " + estado.value;


    }
}