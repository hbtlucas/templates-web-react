import { Header } from "@/components/header";

export default function Layout({ children }) {
  return (
    <main className="flex min-h-screen flex-col p-8 min-w-full bg-white">
      <Header title="Renderização Condicional" subtitle="Condicionando a exibição de componentes" />
      <div className="pt-8 flex justify-start">
        {children}
      </div>
    </main>
  );
}


