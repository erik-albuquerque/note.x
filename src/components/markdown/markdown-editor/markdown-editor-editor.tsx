import ReactMarkdownEditor, { type MDEditorProps } from '@uiw/react-md-editor'

import { useTheme } from '../../../hooks/use-theme'
import { cn } from '../../../utils/cn'
import { MarkdownKaTeXSupport } from '../markdown-katex-support'
import { markdownToolbars } from './markdown-toolbars'

type MarkdownEditorEditorProps = MDEditorProps

const MarkdownEditorEditor = ({
  value,
  onChange,
  className = undefined,
  ...props
}: MarkdownEditorEditorProps) => {
  const { isDarkTheme } = useTheme()

  const colorMode = isDarkTheme === true ? 'dark' : 'light'

  return (
    <div data-color-mode={colorMode}>
      <ReactMarkdownEditor
        className={cn('', className)}
        value={value}
        onChange={onChange}
        commands={markdownToolbars}
        previewOptions={{
          components: {
            code: MarkdownKaTeXSupport
          }
        }}
        {...props}
      />
    </div>
  )
}

export default MarkdownEditorEditor
