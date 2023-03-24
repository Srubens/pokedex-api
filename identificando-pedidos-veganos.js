const numPedidos = 2

for (let i = 1; i <= numPedidos; i++) {
  const prato = ['hamburguer', 'salada de fruta']
  const calorias = [300,600]
  //Explicação: atribui "true" se o valor lido via gets() for estritamente igual a 's'.
  //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
  const ehVegano = true

  //TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.
  console.log(` Pedido ${i}: ${prato[i]} ${ ehVegano == true ? '(Vegano)' : '(Nao-Vegano)' } - ${calorias} calorias `)
}