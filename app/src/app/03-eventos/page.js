"use client";

import { CardContato } from "@/components/card";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function Home() {

  return (
    <div className="flex flex-col items-start flex-wrap w-full  space-y-8">
      <Exemplo1 />
      <Exemplo2 />
      <Exemplo3 />
      <Exemplo4 />
      <Exemplo5 />
      <Exemplo6 />
    </div>
  )
}

function Exemplo1() {
  return (
    <div>
      <h1>Exemplo 1 - onClick</h1>
      <div className="flex flex-row mt-2 justify-start space-x-4">
        <button
          type="button"
          onClick={() => alert("Botão 'Salvar' clicado!")}
          className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Salvar
          <CheckCircleIcon aria-hidden="true" className="-mr-0.5 h-5 w-5" />
        </button>        
      </div>
    </div>
  )
}


function Exemplo2() {
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  return (
    <div>
      <h1 >Exemplo 2 - onCkick - Grupo de Botoes</h1>
      <div className="isolate inline-flex rounded-md shadow-sm">
        {meses.map((mes, index) => (
          <button
            onClick={() => alert(`Mês selecionado: ${mes}`)}
            key={index}
            type="button"
            className={`relative inline-flex items-center bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-red-100 focus:z-10` + 
              ((index === 0) && " rounded-l-md ") +
              ((index === (meses.length-1))  && " rounded-r-md ") 
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
  return (
    <div>
      <h1 >Exemplo 3 - onChange / onBlur / onFocus</h1>
      <p className="text-xs">Olhar o console log</p>
      <div className="mt-4">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-800">
          Email
        </label>
        <div className="mt-1">
          <input
            onChange={(evento) => console.log(evento)}
            onBlur={(e) => console.log("Saiu do campo", e.target.value)}
            onFocus={(e) => console.log("Entrou no campo", e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  )
}

function Exemplo4() {
  return (
    <div>
      <h1 >Exemplo 4 - onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, onDoubleClick  </h1>
      <p className="text-xs">Olhar o console log</p>
      <div 
        onMouseEnter={(e) => console.log(`Mouse entrou no elemento`)}
        onMouseLeave={(e) => console.log("Mouse saiu do elemento")}
        onMouseDown={(e) => console.log("Mouse pressionado")}
        onMouseUp={(e) => console.log("Mouse solto")}
        onDoubleClick={(e) => console.log("Mouse deu dois cliques")}
        className="h-32 w-80 bg-gray-600 border border-gray-900 text-center rounded-md shadow-md text-white"
      >
        Passe o mouse e olhe o console log
      </div>
    </div>
  )
}

function Exemplo5() {
  return (
    <div>
      <h1 >Exemplo 5 - checkbox - onChecked  </h1>
      <div className="relative flex items-start mt-4">
        <div className="flex h-6 items-center">
          <input
            onChange={(e) => console.log(`Checkbox: ${e.target.checked}`)}
            name="comments"
            type="checkbox"
            aria-describedby="comments-description"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label htmlFor="comments" className="font-medium text-gray-900">
            Um checkbox qualquer
          </label>
          <p id="comments-description" className="text-gray-500">
            Verifique o console log para ver o resultado do evento onChecked
          </p>
        </div>
      </div>
    </div>    
  )
}


export function Exemplo6() {
  const notificationMethods = [
    { id: 'email', title: 'Email' },
    { id: 'sms', title: 'Phone (SMS)' },
    { id: 'push', title: 'Push notification' },
  ]
  return (
    <div>
      <h1 >Exemplo 6 - radioButtons - onChange </h1>    
      <div className="mt-4">
        <legend className="text-sm font-semibold leading-6 text-gray-900">Notificações</legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">Veja no console log o resultado</p>
        <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {notificationMethods.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                defaultChecked={notificationMethod.id === 'email'}
                id={notificationMethod.id}
                value={notificationMethod.id}
                name="notification-method"
                type="radio"
                onChange={(e) => console.log(`Radio Button: ${e.target.value}`)}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
