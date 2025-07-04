const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent =tamanhoSenha;
const Maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrsuvwxyz';
const numeros = '012356789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelectorAll('#campo-senha');
const checkbox = document.querySelectorAll ('.checkbox');
const forcaSenha = document.querySelector('forca');


botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){

    if(tamanhoSenha  >1){

        tamanhoSenha--;

    }
   mumeroSenha.textContent = tamanhoSenha;
   geraSenha();
}

function aumentaTamanho(){

    if(tamanhoSenha  <20)

    tamanhoSenha++;
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();