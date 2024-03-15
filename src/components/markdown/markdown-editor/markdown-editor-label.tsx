import { ComponentProps } from 'react'

import { cn } from '../../../utils/cn'

type MarkdownEditorLabelProps = ComponentProps<'span'>

const MarkdownEditorLabel: React.FC<MarkdownEditorLabelProps> = ({
  children,
  className = undefined,
  ...props
}: MarkdownEditorLabelProps) => {
  return (
    <span className={cn('', className)} {...props}>
      {children}
    </span>
  )
}

export { MarkdownEditorLabel }
