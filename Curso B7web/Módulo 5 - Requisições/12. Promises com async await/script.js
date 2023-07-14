
document.querySelector("#botao").addEventListener("click", carregaPost);


document.querySelector("#botao-envia-post").addEventListener("click", inserePost);


async function carregaPost() {

    let Response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await Response.json();
    alert(`Título do primeiro post: ${json[0].title}`);
    alert('opa clicou');
}

function inserePost(){
   
    fetch('https://jsonplaceholder.typicode.com/posts', {
        
        method: 'POST', 

     
        headers: {   
            'Content-Type': 'application/json'
        },
          
        body: JSON.stringify({ 
            title: 'Titulo de teste',
            body: 'Corpo de teste',
            userId: 2
        })
    })
    .then((Response) => {
        return Response.json();  
    })
    .then((json) => {
       
        
        console.log(json);
    })
}

