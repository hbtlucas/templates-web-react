<h1>Guia de Anotações para Projetos React</h1>

<h4>1.1. Criar um Novo Projeto React<br></h4>
npx create-react-app nome-do-projeto<br>

<h4>2.1. Instalar Dependências<br></h4>
npm install<br>

<h4>2.2. Adicionar Novas Dependências<br></h4>
npm install nome-da-dependencia<br>

Para adicionar uma dependência de desenvolvimento (devDependency):<br>
npm install nome-da-dependencia --save-dev<br>

<h4>3.1. Iniciar o Servidor de Desenvolvimento<br></h4>
npm start<br>

<h4>3.2. Construir o Projeto para Produção<br></h4>
npm run build<br>

<h1>4. Solução de Problemas Comuns</h1>

4.1. next não é reconhecido como um comando<br>
npm install next react react-dom<br>

4.2. Diretório .next não encontrado<br>
npm run build<br>

4.3. Erros de Vulnerabilidades de Segurança<br>
npm audit fix<br>

Para forçar correções (pode atualizar para versões incompatíveis):<br>
npm audit fix --force<br>

<h4>5. Comandos Úteis<br></h4>
5.1. Atualizar Dependências<br>
npm update<br>

6. Ambiente de Desenvolvimento<br>
6.1. Configuração de Variáveis de Ambiente<br>
Crie um arquivo .env na raiz do projeto para definir variáveis de ambiente. Exemplo:<br>
REACT_APP_API_URL=http://api.exemplo.com<br>

6.2. Limpar Cache<br>
npm cache clean --force<br>


<h1>Conceitos:</h1>

### Objetos
Objetos são coleções de dados e funcionalidades em JavaScript. Eles são usados para armazenar informações como pares de chave-valor e são extremamente úteis para organizar dados.

```js
// Exemplo de um objeto:
const pessoa = {
  nome: 'João',
  idade: 30,
  profissao: 'Desenvolvedor',
  saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};

// Acessando propriedades e métodos do objeto:
console.log(pessoa.nome); // João
pessoa.saudacao(); // Olá, meu nome é João
```

### Arrays
Arrays são listas ordenadas de valores. Eles podem armazenar qualquer tipo de dado, incluindo números, strings, objetos e até mesmo outros arrays.

```js
// Exemplo de um array:
const numeros = [1, 2, 3, 4, 5];

// Acessando elementos e métodos do array:
console.log(numeros[0]); // 1
numeros.push(6); // Adiciona 6 ao final do array
console.log(numeros.length); // 6
```

### Funções
Funções são blocos de código reutilizáveis que executam uma tarefa específica. Elas podem receber parâmetros e retornar valores.

```js
// Exemplo de uma função:
function soma(a, b) {
  return a + b;
}

const resultado = soma(3, 4); // 7
console.log(resultado); // 7
```

### Promises
Promises são usadas para lidar com operações assíncronas, como requisições HTTP ou leituras de arquivos. Elas representam um valor que pode estar disponível agora, no futuro ou nunca.

```js
// Exemplo de uma Promise:
const promessa = new Promise((resolve, reject) => {
  const sucesso = true;

  if (sucesso) {
    resolve('Operação bem-sucedida!');
  } else {
    reject('Ocorreu um erro.');
  }
});

promessa
  .then((mensagem) => {
    console.log(mensagem); // 'Operação bem-sucedida!'
  })
  .catch((erro) => {
    console.log(erro);
  });
```

### Funções Async/Await
Async/Await é uma sintaxe mais simples para trabalhar com Promises. `async` define uma função assíncrona, e `await` pausa a execução da função até que a Promise seja resolvida.

```js
// Exemplo de função async/await:
async function obterDados() {
  try {
    const resposta = await fetch('https://api.example.com/dados');
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error('Erro ao obter dados:', erro);
  }
}

obterDados();
```

### Arrow Functions
Arrow Functions são uma sintaxe mais concisa para escrever funções. Elas são especialmente úteis em callbacks e funções de array. A principal diferença é que elas não têm seu próprio `this` ou `arguments`.

```js
// Exemplo de Arrow Function:
const saudacao = (nome) => `Olá, ${nome}!`;

console.log(saudacao('Maria')); // Olá, Maria!

// Exemplo com map:
const numeros = [1, 2, 3, 4];
const dobro = numeros.map((numero) => numero * 2);
console.log(dobro); // [2, 4, 6, 8]
```

Esses conceitos são fundamentais para entender e trabalhar com JavaScript de forma eficiente. Se precisar de mais detalhes sobre algum deles, posso aprofundar mais!

