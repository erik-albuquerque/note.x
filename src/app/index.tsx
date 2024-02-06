import logo from '../assets/logo.svg'

function App() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 py-12">
      <img src={logo} alt="Notes" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-zinc-500"
        />
      </form>

      <div className="h-px bg-zinc-800" />

      <div className="grid auto-rows-[250px] grid-cols-3 gap-6">
        <div className="space-y-3 rounded-md border border-zinc-700 bg-zinc-900 p-5">
          <span className="text-sm font-medium text-zinc-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-zinc-400">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </div>

        <div className="relative space-y-3 overflow-hidden rounded-md bg-zinc-800 p-5">
          <span className="text-sm font-medium text-zinc-300">há 2 dias</span>
          <p className="text-sm leading-6 text-zinc-400">
            O Drizzle possui um plugin do ESLint para evitar que realizemos
            updates ou deletes sem where... Para configurar o plugin, é preciso
            instalar como abaixo:
          </p>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-black/0" />
        </div>

        <div className="relative space-y-3 overflow-hidden rounded-md bg-zinc-800 p-5">
          <span className="text-sm font-medium text-zinc-300">há 4 dias</span>
          <p className="text-sm leading-6 text-zinc-400">
            No app do NLW vamos criar um layout incrível, assim podemos entregar
            a melhor experiência para a comunidade. Na aplicação React vamos
            criar um projeto que permite o usuário salvar notas em texto ou
            áudio.
          </p>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-black/0" />
        </div>
      </div>
    </main>
  )
}

export { App }
