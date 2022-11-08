let lista = [
       {id:1, nome:'Bonieky', sobrenome: 'Lacerda'},
       {id:2, nome:'André', sobrenome: 'Matos'},
       {id:2, nome:'Jubileu', sobrenome: 'Gomes'},
    ];
    
    let pessoa = lista.find(function(item){
       return (item.sobrenome =='Matos') ? true : false;
    });
    
    let res = pessoa;
    
    console.log(res);