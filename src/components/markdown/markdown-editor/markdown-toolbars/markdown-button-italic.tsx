import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonItalicProps = ICommand

const MarkdownButtonItalic: MarkdownButtonItalicProps = {
  ...commands.italic,
  icon: <Lucide.Italic className="size-4" />
}

export { MarkdownButtonItalic }
