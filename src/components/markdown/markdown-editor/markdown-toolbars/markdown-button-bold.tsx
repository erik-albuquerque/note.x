import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonBoldProps = ICommand

const MarkdownButtonBold: MarkdownButtonBoldProps = {
  ...commands.bold,
  icon: <Lucide.Bold className="size-4" />
}

export { MarkdownButtonBold }
