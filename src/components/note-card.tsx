const NoteCard: React.FC = () => {
  return (
    <button className="relative flex flex-col gap-3 overflow-hidden rounded-md bg-zinc-800 p-5 text-left outline-none transition-all hover:ring-2 hover:ring-zinc-700 focus-visible:ring-2 focus-visible:ring-violet-400">
      <span className="text-sm font-medium text-zinc-300">há 2 dias</span>
      <p className="text-sm leading-6 text-zinc-400">
        O Drizzle possui um plugin do ESLint para evitar que realizemos updates
        ou deletes sem where... Para configurar o plugin, é preciso instalar
        como abaixo:
      </p>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-black/0" />
    </button>
  )
}

export { NoteCard }
