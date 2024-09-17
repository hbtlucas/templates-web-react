import { Header } from "@/components/header";

export default function Layout({ children }) {
  return (
    <main className="flex min-h-screen flex-col p-8 min-w-full bg-white">
      <Header title="Eventos e Estados" subtitle="Arrays e Objetos em estados" />
      <div className="pt-8 flex justify-start">
        {children}
      </div>
    </main>
  );
}


