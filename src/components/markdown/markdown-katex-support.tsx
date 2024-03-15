import type { Element } from 'hast'
import katex from 'katex'
import { getCodeString } from 'rehype-rewrite'
import 'katex/dist/katex.css'

type MarkdownKaTeXSupportProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  node?: Element
}

const MarkdownKaTeXSupport = ({
  children = [],
  className,
  ...props
}: MarkdownKaTeXSupportProps) => {
  if (typeof children === 'string' && /^\$\$(.*)\$\$/.test(children)) {
    const html = katex.renderToString(children.replace(/^\$\$(.*)\$\$/, '$1'), {
      throwOnError: false
    })
    return (
      <code
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ background: 'transparent' }}
      />
    )
  }
  const code =
    props.node && props.node.children
      ? getCodeString(props.node.children)
      : children
  if (
    typeof code === 'string' &&
    typeof className === 'string' &&
    /^language-katex/.test(className.toLocaleLowerCase())
  ) {
    const html = katex.renderToString(code, {
      throwOnError: false
    })
    return (
      <code
        style={{ fontSize: '150%' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }
  return <code className={String(className)}>{children}</code>
}

export { MarkdownKaTeXSupport }
