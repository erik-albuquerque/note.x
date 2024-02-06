const NewNoteCard: React.FC = () => {
  return (
    <div className="space-y-3 rounded-md border border-zinc-700 bg-zinc-900 p-5">
      <span className="text-sm font-medium text-zinc-200">Adicionar nota</span>
      <p className="text-sm leading-6 text-zinc-400">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </div>
  )
}

export { NewNoteCard }
