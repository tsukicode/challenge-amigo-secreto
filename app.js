let listaAmigos = [];
let campo = document.querySelector('input');

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo === "") {
        campo.placeholder = "Por favor, insira um nome.";
    } else if (listaAmigos.includes(amigo)){
        campo.placeholder = "Esse amigo já foi adicionado.";
    } else {
        listaAmigos.push(amigo);
        console.log(listaAmigos);
    }
    limparCampo();
    mostrarLista();
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let amigo of listaAmigos) {
        let li = document.createElement("li")
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (listaAmigos.length === 0) {
        resultado.innerHTML = "Você ainda não adicionou nenhum amigo."
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[indiceAleatorio];
        
        resultado.innerHTML = `O amigo sorteado foi ${amigoSorteado}.`;
    }
}