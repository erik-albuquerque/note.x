import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonStrikethroughProps = ICommand

const MarkdownButtonStrikethrough: MarkdownButtonStrikethroughProps = {
  ...commands.strikethrough,
  icon: <Lucide.Strikethrough className="size-4" />
}

export { MarkdownButtonStrikethrough }
