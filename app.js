let amigos = [];              //Listar com os nomes dos amigos
let numeroLimiteAmigos = 3;   //Limitar o número máximo de amigos
let contadorAmigos = 1;       //Contar o número de amigos inseridos

//Alterar o texto na tela com uma mensagem relacionando o número máximos de nomes que podem ser inseridos
exibirTextoNaTela('h2','Digite o nome de até '+ numeroLimiteAmigos + ' amigos secretos!');

//Exibir na tela a mensagem
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Adicionar um novo nome na lista amigos[]
function adicionarAmigo(){
    //let nomeAmigo = document.querySelector('input').value;
    let nomeAmigo = document.getElementById('amigo').value;
    
    
    if (numeroLimiteAmigos >= contadorAmigos ){ 
        //Garantir que o campo não esteja vazio
        if (nomeAmigo.length != 0){
            amigos.push(nomeAmigo);
            exibirTextoNaTela('h2','Digite o nome de até '+ numeroLimiteAmigos + ' amigos secretos!');
           
            apresentaListaAmigos('li',amigos);
            contadorAmigos++;
        }
        else {
            exibirTextoNaTela('h2','Por favor, insira um nome.');
        }
    }
    else {
          exibirTextoNaTela('h2','Número máximo de amigos atingidos!');
        } 
}

//Limpar o de inserção a cada nome inserido na lista de amigos
function limparCampo(){
    nomeAmigo = document.querySelector('input'); 
    nomeAmigo.value = '';
} 

//Apresentar a lista de amigos que estão sendo digitados na tela
function apresentaListaAmigos(tag, texto){
    let lista = document.querySelector(tag);
    lista.innerHTML = texto;
    limparCampo(); 
}

//Sortear o amigo secreto e enviar para exibirTextoNaTela o nome do sorteado
function sortearAmigo(){
    let amigoEscolhido = parseInt(Math.random() * contadorAmigos);
    if (amigos.length > 0){
        exibirTextoNaTela('h2', 'Seu amigo secreto é '+ amigos[amigoEscolhido-1]+ '!');      
    }
    else {
        exibirTextoNaTela('h2','Por favor, insira um nome.');
    }
}
