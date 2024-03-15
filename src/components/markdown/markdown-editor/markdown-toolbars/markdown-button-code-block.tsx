import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonCodeBlockProps = ICommand

const MarkdownButtonCodeBlock: MarkdownButtonCodeBlockProps = {
  ...commands.codeBlock,
  icon: <Lucide.FileCode className="size-[18px]" />
}

export { MarkdownButtonCodeBlock }
