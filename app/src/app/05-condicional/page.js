"use client";

import { useState } from "react";

export default function Home() {

  return (
    <div className="flex flex-col items-start flex-wrap w-full  space-y-8">
      <Exemplo1 />
      <Exemplo2 />
      <Exemplo3 />
      <Exemplo4 />
      <Exemplo5 />
    </div>
  )
}

function Exemplo1() {
  let listaCompras = [
    { nome: "Maçãs", comprado: false },
    { nome: "Bananas", comprado: true },
    { nome: "Cenouras", comprado: false },
    { nome: "Cerveja", comprado: true },
  ];
  return (
    <div>
      <h1>Exemplo 1: Utilizando if's / else's</h1>
      <div className="flex flex-col mt-2 ">
      <section>
        <h1>Lista de Compras</h1>
        <ul>
          {listaCompras.map((item, index) => (
            <Exemplo1Item key={index} nome={item.nome} comprado={item.comprado} />
          ))}
        </ul>
      </section>
      </div>
    </div>
  )
}

function Exemplo1Item({ nome, comprado }) {
  let itemContent = nome;
  if (comprado) {
    itemContent = "✅ " + nome;
  }
  else {
    itemContent = "❌ "+ nome;
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}


function Exemplo2() {
  let listaCompras = [
    { nome: "Maçãs", comprado: false },
    { nome: "Bananas", comprado: true },
    { nome: "Cenouras", comprado: false },
    { nome: "Cerveja", comprado: true },
  ];
  return (
    <div>
      <h1>Exemplo 2: Retornando 'null' para denotar um componente inexistente</h1>
      <div className="flex flex-col mt-2 ">
      <section>
        <h1>Lista de Compras</h1>
        <ul>
          {listaCompras.map((item, index) => (
            <Exemplo2Item key={index} nome={item.nome} comprado={item.comprado} />
          ))}
        </ul>
      </section>
      </div>
    </div>
  )
}

function Exemplo2Item({ nome, comprado }) {
  let itemContent = nome;
  if (comprado) {
    itemContent = "✅ " + nome;
  }
  else 
    return null;
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

function Exemplo3() {
  let listaCompras = [
    { nome: "Maçãs", comprado: false },
    { nome: "Bananas", comprado: true },
    { nome: "Cenouras", comprado: false },
    { nome: "Cerveja", comprado: true },
  ];
  return (
    <div>
      <h1>Exemplo 3: Variáveis também podem conter componentes</h1>
      <div className="flex flex-col mt-2 ">
      <section>
        <h1>Lista de Compras</h1>
        <ul>
          {listaCompras.map((item, index) => (
            <Exemplo3Item key={index} nome={item.nome} comprado={item.comprado} />
          ))}
        </ul>
      </section>
      </div>
    </div>
  )
}

function Exemplo3Item({ nome, comprado }) {
  let itemContent = nome;
  if (comprado) {
    itemContent = <del>{"✅ " + nome}</del>;
  }
  else 
    itemContent = "❔ " + nome;

  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

function Exemplo4() {
  let listaCompras = [
    { nome: "Maçãs", comprado: false },
    { nome: "Bananas", comprado: true },
    { nome: "Cenouras", comprado: false },
    { nome: "Cerveja", comprado: true },
  ];
  return (
    <div>
      <h1>Exemplo 4: Utilizando o operador lógico AND: &&</h1>
      <div className="flex flex-col mt-2 ">
      <section>
        <h1>Lista de <strong>Comprados</strong>:</h1>
        <ul>
          {listaCompras.map((item, index) => (
            (item.comprado)&&<Exemplo2Item key={index} nome={item.nome} comprado={item.comprado} />
          ))}
        </ul>
        <h1>Lista de <strong>NÃO comprados</strong>:</h1>
        <ul>
          {listaCompras.map((item, index) => (
            (!item.comprado)&&<Exemplo3Item key={index} nome={item.nome} comprado={item.comprado} />
          ))}
        </ul>
        <h1>Lista - Usando Filter</h1>
        <ul>
          {listaCompras.filter((item) => !item.comprado).map((item, index) => (
            <li key={index}>{item.nome}</li>
          ))}
        </ul>        
      </section>
      </div>
    </div>
  )
}

// Operador Ternário
function Exemplo5() {
  let listaCompras = [
    { nome: "Maçãs", comprado: false },
    { nome: "Bananas", comprado: true },
    { nome: "Cenouras", comprado: false },
    { nome: "Cerveja", comprado: true },
  ];
  return (
    <div>
      <h1>Exemplo 5: Utilizando o operador ternário</h1>
      <div className="flex flex-col mt-2 ">
      <section>
        <h1>Lista de Compras</h1>
        <ul>
          {listaCompras.map((item, index) => (
            <li>
              {"◻ " + item.nome}
              {item.comprado ? <BadgeVerde text="Comprado" /> : <BadgeVermelho texto="Não comprado" />}
            </li>
          ))}
        </ul>
      </section>
      </div>
    </div>
  )
}

function BadgeVermelho({texto}) {
  return (
    <span className="mx-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
      {texto}
    </span>
  )
}

function BadgeVerde({text}) {
  return (
    <span className="mx-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
      {text}
    </span>    
  )
}