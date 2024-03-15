import { ComponentProps } from 'react'

import { useTheme } from '../../../hooks/use-theme'
import { cn } from '../../../utils/cn'

type MarkdownEditorRootProps = ComponentProps<'div'>

const MarkdownEditorRoot = ({
  children,
  className = undefined,
  ...props
}: MarkdownEditorRootProps) => {
  const { isDarkTheme } = useTheme()

  const colorMode = isDarkTheme === true ? 'dark' : 'light'

  return (
    <div
      data-color-mode={colorMode}
      className={cn('flex flex-col gap-2', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default MarkdownEditorRoot
