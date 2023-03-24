let entrada = `Carlos
Rua Dio, 123
2
Esfiha de Carne
5
Kibe
5`.split('\n');

function gets(){
  return entrada.shift()
}

const pedido = {
  cliente: gets(),
  endereco: gets(),
  itens: [],
  taxaEntrega: 5.0
};

// Para popular o array de itens, criamos a seguinte estrutura de repetição:
const quantidadeItens = parseInt(gets());
while (pedido.itens.length < quantidadeItens) {
  const nomeItem = gets();
  const precoItem = parseFloat(gets());
  pedido.itens.push({ nome: nomeItem, preco: precoItem });
}

// let total = pedido.itens.reduce((prev,curr) => prev + curr.preco, 0)
let totalPrecoItem = pedido.itens.reduce((prev,curr) => prev + curr.preco, 0)
let valorTotal = pedido.taxaEntrega + totalPrecoItem;
console.log('Pedido: '+pedido.cliente+'\nEndereco de entrega: '+pedido.endereco+'\nTotal: R$ '+valorTotal.toFixed(2));

// Pedido: Joao
// Endereco de entrega: Rua B, 456
// Total: R$ 28.00
// let totalPrecoItem = pedido.itens.reduce((prev, curr) =>{
//     return prev + curr.precoItem 
// },0)


// let total = parseFloat(pedido.taxaEntrega) + parseFloat(totalPrecoItem)
// console.log(`
// Pedido: ${pedido.cliente}
// Endereco de entrega: ${pedido.endereco}
// Total: ${total.toFixed(2)}
// `)
