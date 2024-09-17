import { Header } from "@/components/header";

export default function Layout({ children }) {
  return (
    <main className="flex min-h-screen flex-col p-8 min-w-full bg-white">
      <Header title="Utilizando useEffect" subtitle="A callback passada ao useEffect é chamado quando o componente é iniciado ou também quando algum estado específico mudou." />
      <div className="pt-8 flex justify-start">
        {children}
      </div>
    </main>
  );
}


