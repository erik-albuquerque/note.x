import React from 'react'

import { cn } from '../../utils/cn'
import { Input } from '../ui/input'

export interface SearchBarInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBarInput = React.forwardRef<HTMLInputElement, SearchBarInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <Input
        type={type}
        className={cn('text-base tracking-tight', className)}
        ref={ref}
        {...props}
      />
    )
  }
)

SearchBarInput.displayName = 'SearchBarInput'

export { SearchBarInput }
