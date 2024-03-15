import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonLinkProps = ICommand

const MarkdownButtonLink: MarkdownButtonLinkProps = {
  ...commands.link,
  icon: <Lucide.Link className="size-4" />
}

export { MarkdownButtonLink }
