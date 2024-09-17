import { Header } from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col p-8 min-w-full bg-white">
      <Header title="Componentes" subtitle="Aprenda a criar componentes com React" />
      <div className="pt-8 flex justify-start">
        {children}
      </div>
    </main>
  );
}


