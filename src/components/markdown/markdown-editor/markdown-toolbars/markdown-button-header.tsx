import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonHeaderProps = ICommand

const MarkdownButtonHeader: MarkdownButtonHeaderProps = {
  ...commands.title,
  icon: <Lucide.Heading className="size-4" />
}

export { MarkdownButtonHeader }
