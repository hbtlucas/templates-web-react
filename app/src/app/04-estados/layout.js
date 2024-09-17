import { Header } from "@/components/header";

export default function Layout({ children }) {
  return (
    <main className="flex min-h-screen flex-col p-8 min-w-full bg-white">
      <Header title="Estados (hook: useState)" subtitle="Reagindo a mudança de estados" />
      <div className="pt-8 flex justify-start">
        {children}
      </div>
    </main>
  );
}


