import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 min-w-full bg-white">
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 grid-cols-2 gap-2 w-full">
        <ClassCard label="Exemplo 1" description="Introducao a Componentes" href="/01-componentes" />
        <ClassCard label="Exemplo 2" description="Replicação de Componentes - Loops com map"  href="/02-replicacao" />
        <ClassCard label="Exemplo 3" description="Reagindo a Eventos"  href="/03-eventos" />
        <ClassCard label="Exemplo 4" description="Utilizando estados em componentes"  href="/04-estados" />
        <ClassCard label="Exemplo 5" description="Renderização Condicional"  href="/05-condicional" />
        <ClassCard label="Exemplo 6" description="Como emitir um evento em um componente filho?"  href="/06-eventos-filhos" />
        <ClassCard label="Exemplo 7" description="Juntando eventos + estados"  href="/07-eventos-estados" />
        <ClassCard label="Exemplo 8" description="Objetos e estados"  href="/08-objetos-estados" />
        <ClassCard label="Exemplo 9" description="Lidando com Formulários"  href="/09-formularios" />
        <ClassCard label="Exemplo 10" description="Utilizando o useEffect"  href="/10-useEffect" />
        <ClassCard label="Exemplo 11" description="Fazendo chamadas a APIs com fetch e axios"  href="/11-apis" />
      </div>
    </main>
  );
}

function ClassCard({label, description, href=""}) {
  return <Link href={href}>
    <div className="hover:bg-slate-300  hover:border-gray-600 col-span-1 border border-gray-400 bg-gray-300 h-24 rounded-md shadow-lg items-center flex justify-center m-2 flex-col shadow-blue-300 p-2 text-center">
      <span className="text-blue-950 font-bold text-lg">{label}</span>
      <span className="text-sm text-gray-600">{description}</span>
    </div>
  </Link>
        
}