function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

// function main(){
//     console.log(fazGet("https://localhost:44311/servico/readall"))
// }

function criarLinha(servico){
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdTipo = document.createElement("td");
    tdDescricao = document.createElement("td");
    tdValor = document.createElement("td");
    
    tdId.innerHTML = servico.id;
    tdTipo.innerHTML = servico.tipo;
    tdDescricao.innerHTML = servico.descricao;
    tdValor.innerHTML = servico.valor;

    linha.appendChild(tdId);
    linha.appendChild(tdTipo);
    linha.appendChild(tdDescricao);
    linha.appendChild(tdValor);

    return linha;
}

function main(){
    data = fazGet("https://localhost:44311/servico/readall");
    servicos = JSON.parse(data);        
    let tabela = document.getElementById("tabela");
    servicos.forEach(function(element){
        let linha = criarLinha(element);
        tabela.appendChild(linha);
        console.log(servicos)
    });
}

main();
