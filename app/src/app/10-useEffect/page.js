"use client";

import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-start flex-wrap w-full  space-y-8">
      <Exemplo1 />
    </div>
  )
}


function Exemplo1() {
  const [mostrarComponente, setMostrarComponente] = useState(false);
  return (
    <div className="">
      <h1 className="text-base mb-8">Exemplo: useEffect na criação do componente</h1>
      <div className="my-8 flex flex-col space-y-2 justify-start">

        {(!mostrarComponente) && (
          <button
            type="button"
            onClick={() => setMostrarComponente(true)}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Criar Componente
          </button>
        )}

        {(mostrarComponente) && (
        <>
          <button
            type="button"
            onClick={() => setMostrarComponente(false)}
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Remover Componente
          </button>

          <Exemplo1Componente />
        </>
        )}

      </div>

    </div>
  )
}

// Importante: se seu useEffect está sendo chamado duas vezes, leia isso:
// https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
// No nosso caso, no nextjs, a razão é devido o Strict Mode, você pode desabilita-lo editando o next.config.mjs e adicionando:
// const nextConfig = {
//   reactStrictMode: false,
// };
//
function Exemplo1Componente() {
  useEffect(() => {
    console.log("Componente criado");
    return () => {
      console.log("Componente removido");
    }
  } , []);  

  return (
    <div className="p-12 flex flex-row justify-center rounded-sm bg-slate-400 shadow-lg">
      <h1 className="text-4xl">Componente Criado</h1>
    </div>
  )
}