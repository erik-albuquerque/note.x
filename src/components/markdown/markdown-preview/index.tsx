import ReactMarkdownPreview, {
  type MarkdownPreviewProps as ReactMarkdownPreviewProps
} from '@uiw/react-markdown-preview'
import rehypeSanitize from 'rehype-sanitize'
import emoji from 'remark-emoji'

import { useTheme } from '../../../hooks/use-theme'
import { MarkdownKaTeXSupport } from '../markdown-katex-support'

type MarkdownPreviewProps = ReactMarkdownPreviewProps

const MarkdownPreview = ({
  source,
  className = undefined,
  ...props
}: MarkdownPreviewProps) => {
  const { isDarkTheme } = useTheme()

  const colorMode = isDarkTheme === true ? 'dark' : 'light'

  const rehypePlugins = [rehypeSanitize]
  const remarkPlugins = [emoji]

  return (
    <ReactMarkdownPreview
      source={source}
      components={{
        code: MarkdownKaTeXSupport
        /**
         * FIXME: When note theme is defined, the elements h1, h2..., hr
         * blockquote, table, table tr, table tr:nth-child(2n),
         * contrasts with the color of the theme
         */
      }}
      rehypePlugins={rehypePlugins}
      remarkPlugins={remarkPlugins}
      className={className}
      wrapperElement={{
        'data-color-mode': colorMode
      }}
      {...props}
    />
  )
}

export { MarkdownPreview }
