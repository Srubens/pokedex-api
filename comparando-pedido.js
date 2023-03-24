//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// JSON do Cliente 1
const cliente1 = { 
    nome: gets(), 
    item: gets(), 
    preco: parseFloat(gets())
  };
  
  // JSON do Cliente 2
  const cliente2 = { 
    nome: gets(), 
    item: gets(), 
    preco: parseFloat(gets()) 
  };
  
  //TODO: Comparar os JSONs dos Clientes, verificando se todas as propriedades são iguais.
  JSON.stringify(cliente1) === JSON.stringify(cliente2) ? print(`Os pedidos são iguais`):print(`Os pedidos são diferentes`)
  //TODO: Imprimir a saída conforme o enunciado deste desafio.