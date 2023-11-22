const lista = [
    "Um",
    "Dois",
    "Três"
];

function getLista(){
    return lista;
}

function adicionaNaLista(item){
    lista.push(item);
}

function removeDaLista(posição){
    lista.splice(posição, 1);
}



export {getLista, adicionaNaLista, removeDaLista, limpaLista};