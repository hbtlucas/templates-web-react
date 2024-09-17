export default function Home() {
  const dadosPessoais = {
    id: 1,
    nome: "João",
    idade: 20,
  };

  return (
    <div className="flex flex-col items-center flex-wrap w-full space-x-4">
      <div className="flex flex-row justify-between w-full">
        <MeuQuadrado nome="João da Silva" />
        <MeuCirculo dados={dadosPessoais} />
        <MeuRetangulo dados={dadosPessoais} />
        <PaiDeTodos >
          <p>Parágrafo 1</p>
          <p>Parágrafo 2</p>
          <p>Parágrafo 3</p>
        </PaiDeTodos>
        <RetanguloComQuadrados num={18} />
      </div>
    </div>
  )
}

function MeuQuadrado({nome}) {
  return (
    <div className="h-40 w-40 bg-green-400 rounded-md shadow-md">
      <p className="text-2xl p-4">
        {nome}
      </p>
    </div>
  )
}

function MeuRetangulo({dados}) {
  return (
    <div className="p-8 h-40 w-60 bg-gradient-to-r from-stone-200 
                  to-yellow-300  rounded-md shadow-lg shadow-amber-500">
      <div>
        <p>Id: {dados?.id}</p>
        <p>Nome: {dados?.nome}</p>
        <p>Idade: {dados?.idade}</p>
      </div>
    </div>
  )
}

function MeuCirculo({dados}) {
  return (
    <div className="p-8 h-40 w-40 bg-gradient-to-r from-red-200 
                  to-lime-400 hover:bg-red-200 rounded-full">
      <div>
        <p>Id: {dados?.id}</p>
        <p>Nome: {dados?.nome}</p>
        <p>Idade: {dados?.idade}</p>
      </div>
    </div>
  )
}

function PaiDeTodos({children}) {
  return (
    <div className="p-4 h-40 w-60 stone-200 rounded-md shadow-lg
                  shadow-blue-400 border border-blue-200">
      {children}
    </div>
  )
}

// Tarefa
// Criar um componente chamado Quadradinho
// Criar um componente chamado RetanguloComQuadrados
  // RetanguloComQuadrados tem atributo 'num'
  // Criar n (num) quadradinhos dentro do RetanguloComQuadrados

function Quadradinho() {
  return (
    <div className="h-8 w-8 bg-sky-800 m-2 rounded-md">
    </div>
  )
}

function RetanguloComQuadrados({num}) {
  return (
    <div className="flex flex-row flex-wrap  justify-between h-40 w-80 border border-gray-800
                    bg-stone-200 rounded-md shadow-lg items-center">
      { 
        Array.from({ length: num})
          .map(_ => <Quadradinho /> )  
      }
    </div>
  )
}