console.log(19.9 * 0.6);
let preco=19.90;
let desconto=0.4;
let precoComDesconto=preco*(1-desconto);
let nome="Caderno";
let Categoria="Papelaria";
console.log(precoComDesconto);
console.log(nome + Categoria);
console.log(nome +" "+ Categoria);
console.log("Produto :" + nome + ", Categoria: "+ Categoria);// Testo literal com variavel

console.log("Produto :" + nome 
+ ", Categoria: "
+ Categoria + " loja "+ 
" estudantes gostam de caderno "
 + Categoria +".") /* Quebrando o texto,o programa roda do mesmo jeito. Mas so deve quebrar onde 
  tiver o +. Se quebrar nas aspas, o programa não funciona"
  Nessa aula aprendemos que é muito importante escolher bons nomes.
  Onde tiver nomes compostos, colocar letra maiuscila em cada  nome.*/