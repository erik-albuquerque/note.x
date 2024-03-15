import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonUnorderedListProps = ICommand

const MarkdownButtonUnorderedList: MarkdownButtonUnorderedListProps = {
  ...commands.unorderedListCommand,
  icon: <Lucide.List className="size-5" />
}

export { MarkdownButtonUnorderedList }
