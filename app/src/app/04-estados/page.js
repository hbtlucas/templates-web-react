"use client";

import { useState } from "react";

export default function Home() {

  return (
    <div className="flex flex-col items-start flex-wrap w-full  space-y-8">
      <Exemplo1 />
      <Exemplo2 />
      <Exemplo3 />
    </div>
  )
}

function Exemplo1() {
  let variavelTexto = "Alguma coisa";
  const [estadoTexto, setEstadoTexto] = useState("Alguma coisa");
  return (
    <div>
      <h1>Exemplo 1: Variáveis versus Estados</h1>
      <div className="flex flex-col mt-2 ">
        <div className="mt-1 inline-flex space-x-2">
          <input
            onChange={(e) => {
              let antes = variavelTexto;
              variavelTexto = e.target.value;
              console.log(`variavelTexto: ${antes} -> ${variavelTexto}`);
              setEstadoTexto(e.target.value);
            }}
            type="text"
            placeholder="Qualquer coisa"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="block text-sm font-medium leading-6 text-gray-800">
          <pre>variavelTexto: {variavelTexto}</pre>
        </div>
        <div className="block text-sm font-medium leading-6 text-gray-800">
          <pre>estadoTexto: {estadoTexto}</pre>
        </div>
      </div>
    </div>
  )
}


function Exemplo2() {
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const [mesSelecionado, setMesSelecionado] = useState(undefined);
  return (
    <div>
      <h1 >Exemplo 2 - onCkick - Grupo de Botoes</h1>
      <div className="isolate inline-flex rounded-md shadow-sm">
        {meses.map((mes, index) => (
          <button
            onClick={() => setMesSelecionado(mes)}
            key={index}
            type="button"
            className={`relative inline-flex items-center bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-red-100 focus:z-10` + 
              ((index === 0) && " rounded-l-md ") +
              ((index === (meses.length-1))  && " rounded-r-md ") +
              ((mesSelecionado === mes) && " bg-red-400 hover:bg-red-300 ")
            }
          >
            {mes}
          </button>
        ))}

      </div>
    </div>
  )
}

function Exemplo3() {
  const [texto, setTexto] = useState("Texto Qualquer");
  const [quantidade, setQuantidade] = useState(3);
  return (
    <div  className="w-full">
      <h1>Exemplo 3 - Estados e Props</h1>
      <p className="text-xs text-gray-500">Os componentes sao re-renderizados quando seus estados ou propriedades mudam.</p>
      <div className="flex flex-row space-x-4">
        <div className="mt-4">
          <label htmlFor="textoqualquer" className="block text-sm font-medium leading-6 text-gray-800">
            Texto
          </label>
          <div className="mt-1">
            <input
              id="textoqualquer"
              onChange={(e) => setTexto(e.target.value)}
              type="text"
              value={texto}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="quantidade" className="block text-sm font-medium leading-6 text-gray-800">
            Quantidade Repeticões
          </label>
          <div className="mt-1">
            <input
              id="quantidade"
              onChange={(e) => setQuantidade(parseInt(e.target.value))}
              type="number"
              value={quantidade}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Exemplo3SubComponente texto={texto} quantidade={quantidade} />
      </div>
    </div>
  )
}

function Exemplo3SubComponente({texto, quantidade}) {
  return (
    <div className="p-2 flex flex-row items-start flex-wrap w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 min-h-16">
      {Array.from({length: quantidade}).map((_, index) => (
        <Exemplo3Badge key={index} texto={texto} />
      ))}
    </div>
  );
}

function Exemplo3Badge({texto}) {
  return (
    <span className="m-2 inline-flex items-center gap-x-0.5 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
      {texto}
    </span>
  );
}

