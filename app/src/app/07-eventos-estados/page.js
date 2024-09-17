"use client";

import { useState } from "react";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className="flex flex-col items-start flex-wrap w-full  space-y-8">
      <Exemplo1 />
    </div>
  )
}
const _tabs = [
  { name: 'Meu perfil' , current: true },
  { name: 'Segurança'  , current: false },
  { name: 'Inscrição'  , current: false },
]

function Exemplo1() {
  const [tabs, setTabs] = useState(_tabs);
  const [select, setSelected] = useState(_tabs[0].name);
  const onTabSelect = (tabName) => {
    const newTabs = tabs.map((tab) => {
      tab.current = tab.name === tabName;
      setSelected(tabName);
      return tab;
    });
    setTabs(newTabs);
  }
  return (
    <div className="border p-4 w-10/12 rounded-md">
      <h1 className="text-base mb-8">Exemplo 1: Tabs com Eventos e Estados</h1>
      <Tabs tabs={tabs} onTabSelect={onTabSelect} />
      <div>
        {(select=='Meu perfil') && 
          <div className="bg-gray-50 p-4">
            <MeuPerfil onSave={(perfil)=>console.log(perfil)}/>
          </div>}

        {(select=='Segurança') && 
          <Seguranca />}

        {(select=='Inscrição') && 
          <Inscricao /> }
      </div>
    </div>
  )
}

function Seguranca() {
  return <h1>Seguranca 123</h1>;
}

function Inscricao() {
  return <h1>Inscricao 123</h1>;
}


function Tabs({tabs, onTabSelect}) {
  return (
    <div >
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          onChange={(e) => { (typeof(onTabSelect) == 'function') && onTabSelect?.(e.target.value) }}
          defaultValue={tabs.find((tab) => tab.current).name}
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              onClick={() => { (typeof(onTabSelect) == 'function') && onTabSelect?.(tab.name) }}
              key={tab.name}
              aria-current={tab.current ? 'page' : undefined}
              className={
                (tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700') +
                'rounded-md px-3 py-2 text-sm font-medium'
              }
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}


export function MeuPerfil({onSave}) {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("Brasil");
  const [sobre, setSobre] = useState("");

  return (
    <div className="space-y-10 divide-y divide-gray-900/10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>

        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Sobrenome
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email 
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  País
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Brasil</option>
                    <option>Paraguai</option>
                    <option>Argentina</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Sobre
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={sobre}
                    onChange={(e) => setSobre(e.target.value)}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Escreva algumas sentenças sobre você.</p>
              </div>

            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancelar
            </button>
            <button
              onClick={() => {
                (typeof(onSave)=='function') && onSave?.({nome, sobrenome, email, pais, sobre});
              }}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
