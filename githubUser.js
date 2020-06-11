var body =  document.querySelector('body');
var btadd = document.querySelector('#botao');
var inputadd = document.querySelector('#user');

btadd.onclick = function(){    
    var user = inputadd.value;

    axios.get('https://api.github.com/users/'+user+'/repos')    

    .then(function(response){
        carregando();                
        setTimeout(montalista, 5000, response);                  
    })

    .catch(function(error){
        msgErro();
        console.warn(error);
    })
}

function montalista(response){

    var resposta = response.data;
    var ulElement = document.createElement('ul');

    for(repo of resposta){
            
        var nome = repo.name
        var liElement = document.createElement('li');
        var liTextnode = document.createTextNode(nome);           
           
        liElement.appendChild(liTextnode);
        ulElement.appendChild(liElement);
        body.appendChild(ulElement);
    }
}

function carregando(){

    var loadElement = document.createElement('li');
    var loadText = document.createTextNode('Carregando...');

    loadElement.appendChild(loadText);
    body.appendChild(loadElement);
    
    function delLoad(){
        body.removeChild(loadElement);
    }
    setTimeout(delLoad, 5000)
}

function msgErro(){
    var erroElement = document.createElement('h2');
    var erroText = document.createTextNode('Usuário não encontrado!');    

    erroElement.appendChild(erroText);
    body.appendChild(erroElement);
}

