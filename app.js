let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    let campo = document.querySelector('input');

    if (amigo === "") {
        campo.placeholder = "Por favor, insira um nome.";
    } else if (listaAmigos.includes(amigo)){
        campo.placeholder = "Esse amigo já foi adicionado.";
    } else {
        listaAmigos.push(amigo);
        console.log(listaAmigos);
    }
    limparCampo();
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}