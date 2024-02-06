const SearchNotesForm: React.FC = () => {
  return (
    <form className="w-full">
      <input
        type="text"
        placeholder="Busque em suas notas..."
        className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}

export { SearchNotesForm }
