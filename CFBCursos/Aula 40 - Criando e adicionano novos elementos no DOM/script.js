let todaAsDivs = document.querySelector(".caixa"); //seleciona todas as divs
const divs = ["Primeiradiv", "SegundaDiv", "TerceiraDiv", "QuartaDiv", "QuintaDiv", "SextaDiv", "SétimaDiv"]


divs.map((elemento, index) => {
    
    let novaDiv = document.createElement('div') //cria um novo elemento div
    novaDiv.innerHTML = elemento // adiciona o conteudo a div
    novaDiv.setAttribute("id", "div" + index) // adiciona um id ao novo elemento
    novaDiv.setAttribute("class", "divs") // adiciona uma classe ao novo elemento
    todaAsDivs.appendChild(novaDiv) //adiciona o novo elemento ao elemento pai
    
})






