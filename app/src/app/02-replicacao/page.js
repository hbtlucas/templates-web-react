import { CardContato } from "@/components/card";

export default function Home() {

  return (
    <div className="flex flex-col items-start flex-wrap w-full  space-y-8">
      <Exemplo1 />
      <Exemplo2 />
      <Exemplo3 />
      <Exemplo4 />
    </div>
  )
}

function Exemplo1() {
  const nomes = ["João", "Maria", "José", "Ana", "Pedro"];
  return (
    <div>
      <h1 >Exemplo 1 - Divs</h1>
      <div className="flex flex-row justify-start space-x-4">
        {nomes.map((nome, index) => (
          <div key={index} className="p-2 bg-slate-400 border border-gray-700" >
            <p>{nome}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


function Exemplo2() {
  const nomes = ["João", "Maria", "José", "Ana", "Pedro"];
  return (
    <div>
      <h1 >Exemplo 2 - Listas</h1>
      <div className="flex flex-row justify-start space-x-4 pl-4">
        <ul className="list-disc">
          {nomes.map((nome, index) => (
            <li key={index} className="text-gray-800" >
              <p>{index + 1} - {nome}</p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

function Exemplo3() {
  const pessoas = [
    { nome: "Joao da Silva", idade: 20, cidade: "São Paulo" },
    { nome: "Maria de Souza", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "José da Silva", idade: 30, cidade: "Belo Horizonte" },
    { nome: "Ana Maria", idade: 35, cidade: "Porto Alegre" },
    { nome: "Pedro José", idade: 40, cidade: "Curitiba" }
  ];
  return (
    <div>
      <h1 >Exemplo 3 - Tabelas</h1>
      <div className="flex flex-row justify-start space-x-4">
        <table className="min-w-full divide-y divide-gray-300 shadow-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Idade</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cidade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pessoas.map((pessoa, index) => (
              <tr key={index} className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pessoa.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pessoa.idade}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pessoa.cidade}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

function Exemplo4() {
  let pessoas = [
    { nome: "Joao da Silva", email: "joao@gmail.com", telefone: "+55 66 9999999", imagem_url: "https://randomuser.me/api/portraits/men/44.jpg", papel: "dev", profissao: "Desenvolvedor" },
    { nome: "Maria de Souza", email: "maria@gmail.com", telefone: "+55 11 9999999", imagem_url: "https://randomuser.me/api/portraits/women/23.jpg", papel: "devops", profissao: "Desenvolvedor" },
    { nome: "José da Silva", email: "jose@gmail.com", telefone: "+55 21 9999999", imagem_url: "https://randomuser.me/api/portraits/men/45.jpg", papel: "dev", profissao: "Desenvolvedor" },
    { nome: "Ana Maria", email: "ana@gmail.com", telefone: "+55 51 9999999", imagem_url: "https://randomuser.me/api/portraits/women/24.jpg", papel: "readonly", profissao: "Product Owner" },
  ]
  return (
    <div>
      <h1 >Exemplo 4 - Componentes</h1>
      <div className="flex flex-row justify-start space-x-4">
        {pessoas.map((pessoa, index) => (
          <CardContato key={index} {...pessoa} />
        ))}
      </div>
    </div>
  )
}