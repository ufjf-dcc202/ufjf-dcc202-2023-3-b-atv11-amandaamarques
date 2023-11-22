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



export {getLista, adicionaNaLista, removeDaLista, limpaLista};