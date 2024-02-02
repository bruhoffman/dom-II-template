const inserirItem = () => {
    
    const valorInput = document.getElementById("input").value;
    const ul = document.getElementById("lista");

    const novaLi = document.createElement("li");
    const novoItem = document.createTextNode(valorInput);
    
    novaLi.appendChild(novoItem);

    ul.insertAdjacentElement("beforeend", novaLi)    

}