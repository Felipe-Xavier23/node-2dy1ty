/*   Inserindo no inicio e final de listas */

/*
Ponteiros
  Valores que sao usados para apontar outros valores, ou seja, sao como indices em arrais mas nesse caso sao criados manualmente
e podem mudar para qual valor estao apontado durante a execucao de um programa.

Random Acess
  Em portugues acesso aleatorio. É a capacidade de acessar um elemento da lista arbitratia de uma ordem, em tempo igual,
  nao importando o tamanho de lista.

*/

/*
Tipos de lista:

1° Lista Encadeada simples
2°Duplamente encadeada
3°Circular
4°Ordenada

*/



/*   lista encadeada simples na pratica   */ 

class No {
  constructor(elemento){
  this.elemento = elemento;
  this.proximo = undefined;
}
}

class ListaEncadeada{
  constructor() {
    this.head = undefined;
  
  }
  insertFirst(elemento){
    const novo = new No(elemento)
    let atual ;
    
    if (!this.head) {
      this.head = novo;
    }else{
      atual = this.head
      novo.proximo = novo
    }
    return elemento
    
}
}