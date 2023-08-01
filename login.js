/* FUNÇÃO PARA VERIFICAR PREENCHIMENTO DE LOGIN*/

function verificar() {

    let loginEmail = document.getElementById("loginEmail").value;

    let loginSenha = document.getElementById("loginSenha").value;

 

    if(!loginEmail || !loginSenha) {

        alert("favor preencha os campos para acessar o site");

    } else {

        window.location.href = "aula2.html";

    }

}
// FUNÇÃO PARA ARMAZENAR NOMES EM ARRAY

var dadosLista = [];

function salvarUser(){

  let nomeUser = document.getElementById("nomeUser").value;

  if(nomeUser){

    dadosLista.push(nomeUser);
    criarLista();
    document.getElementById('nomeUser').value = '';
}

}
//função para criar lista de usuario.
function criarLista(){
    let tabela = document.getElementById('tabela').innerHTML =  '<tr><th>Nome Usuário</th><th>Ações</th></tr>';

    for(let i = 0; i <= (dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista [i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger'  onclick=''>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }

}
// função para editar nome

function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i-1)], 1);

}
// função para excluir nome 
function excluir (i){
    dadosLista.splice((i - 1),);
    document.getElementById('tabela').deleteRow(i);
}