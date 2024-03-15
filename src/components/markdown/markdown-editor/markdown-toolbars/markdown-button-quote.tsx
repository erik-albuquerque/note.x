import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonQuoteProps = ICommand

const MarkdownButtonQuote: MarkdownButtonQuoteProps = {
  ...commands.quote,
  icon: <Lucide.Quote className="size-4" />
}

export { MarkdownButtonQuote }
