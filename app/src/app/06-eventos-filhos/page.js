"use client";

import { useState } from "react";

export default function Home() {

  return (
    <div className="flex flex-col items-start flex-wrap w-full  space-y-8">
      <Exemplo1 />
      <Exemplo2 />
    </div>
  )
}

function Exemplo1() {
  const [texto, setTexto] = useState("Alguma coisa");

  return (
    <div className="border p-4 w-6/12 rounded-md">
      <h1 className="text-base">Componente Externo</h1>
      <p className="text-xs text-gray-500"><strong>Texto digitado: </strong> {texto}</p>
      <Exemplo1SubComponente texto={texto} onChangeTexto={(texto) => console.log(texto)} />
    </div>
  )
}

function Exemplo1SubComponente({texto, onChangeTexto}) {
  const [estadoTexto, setEstadoTexto] = useState(texto);

  return (
    <div className="flex flex-col justify-start mt-1 rounded-md bg-gray-100 border p-4">
      <h1 className="text-sm">Componente Interno</h1>
      <input
        onChange={(e) => {
          setEstadoTexto(e.target.value);
          if (onChangeTexto)
            onChangeTexto(e.target.value);
          onChangeTexto?.(e.target.value);
          // ou onChangeTexto && typeof onChangeTexto === "function" && onChangeTexto(e.target.value);
        }}
        value={estadoTexto}
        type="text"
        placeholder="Qualquer coisa"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  )
}

function Exemplo2() {
  const [mesSelecionado, setMesSelecionado] = useState("");

  return (
    <div className="border p-4 w-10/12 rounded-md">
      <h1 className="text-base">Componente Externo</h1>
      <p className="text-xs text-gray-500"><strong>Mês Selecionado: </strong> {mesSelecionado}</p>
      <Exemplo2MesesSel mes={mesSelecionado} onMesSelect={(mes) => setMesSelecionado(mes)}/>
    </div>
  )
}


function Exemplo2MesesSel({mes, onMesSelect}) {
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const [mesSelecionado, setMesSelecionado] = useState(mes);
  return (
    <div className="flex flex-col justify-start mt-1 rounded-md bg-gray-100  p-4">
      <h1 className="text-sm">Componente Interno</h1>
      <div className="flex rounded-md">
        {meses.map((mes, index) => (
          <button
            onClick={() => {
              setMesSelecionado(mes);
              onMesSelect?.(mes);
            }}
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
