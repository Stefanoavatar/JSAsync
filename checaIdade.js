// COMES E BEBES

/*Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch*/


function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function(resolve, reject){

        const sleep = 2000;

        if(idade > 18){
          setTimeout(resolve, sleep);
        }

        else{
          setTimeout(reject, sleep);
        }
    })
}
    

    checaIdade(21)

    .then(function(){
        console.log("Maior que 18");
    })

    .catch(function(){
        console.log("Menor que 18");
    })