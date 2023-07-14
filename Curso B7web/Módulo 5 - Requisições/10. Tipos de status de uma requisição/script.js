
//seleciona o botao e adiciona um evento de clicque a ele que chama a função "carregaPost"
document.querySelector("#botao").addEventListener("click", carregaPost)


function carregaPost() {

    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((Response) => {
            console.log(`status: ${Response.status}`) // para mostrar o status da requisição, usado para ver quando e qual erro ocorreu
            return Response.json(); 
           
        })
        .then((json) => {
            
            
            alert(`Título do primeiro post: ${json[0].title}`);
        })
        .catch(() => { 
            alert('Erro na requisição');
        })

    
    alert('opa clicou');
}