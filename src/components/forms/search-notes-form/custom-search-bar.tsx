import * as Lucide from 'lucide-react'
import { useState, useRef, useCallback, useEffect } from 'react'

import { cn } from '../../../utils/cn'
import { isEmptyString } from '../../../utils/string/is-empty-string'
import { SearchBar } from '../../search-bar'

type CustomSearchBarProps = {
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const hotKey = '/'

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({
  value,
  onChange
}: CustomSearchBarProps) => {
  const [isExpandedInput, setIsExpandedInput] = useState(false)

  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleInputOnBlur = () => {
    setIsExpandedInput(false)
  }

  const handleSearchBarOnClick = () => {
    setIsExpandedInput(true)
  }

  const handleHotKeypress = useCallback(
    (event: KeyboardEvent) => {
      if (hotKey !== event.key) {
        return
      }

      const isExpandedInputValue =
        isEmptyString(value) === true ? !isExpandedInput : true

      setIsExpandedInput(isExpandedInputValue)
    },
    [isExpandedInput, value]
  )

  useEffect(() => {
    window.addEventListener('keypress', handleHotKeypress)

    return () => window.removeEventListener('keypress', handleHotKeypress)
  }, [handleHotKeypress])

  useEffect(() => {
    if (!inputRef.current) {
      return
    }

    if (isExpandedInput === true) {
      inputRef.current?.focus()
    }
  }, [isExpandedInput])

  return (
    <div
      className={cn('flex items-center justify-center', {
        'w-48 md:w-60': isExpandedInput === true,
        'w-20': isExpandedInput === false
      })}
    >
      <SearchBar.Root
        className={cn(
          'w-full rounded-lg px-2 py-[6px]',
          'bg-muted dark:bg-muted/50',
          'cursor-pointer transition-all',
          'focus-within:ring-2 focus-within:ring-muted-foreground dark:focus-within:ring-muted',
          {
            'w-48 md:w-60': isExpandedInput === true,
            'w-20 hover:bg-border/70 dark:hover:bg-border':
              isExpandedInput === false
          }
        )}
        onClick={handleSearchBarOnClick}
      >
        <SearchBar.Icon>
          <Lucide.Search
            className={cn(
              'size-4 text-muted-foreground group-focus-within:text-foreground',
              'group-hover:text-foreground'
            )}
          />
        </SearchBar.Icon>

        {isExpandedInput === true && (
          <SearchBar.Input
            type="text"
            className={cn(
              'placeholder:text-base dark:placeholder:text-muted-foreground',
              'md:text-sm'
            )}
            placeholder={isExpandedInput ? 'Search your notes...' : ''}
            ref={inputRef}
            value={value}
            onChange={onChange}
            onBlur={handleInputOnBlur}
          />
        )}

        {isExpandedInput === false && (
          <SearchBar.Shortcut className="mr-1" hotKey={hotKey} />
        )}
      </SearchBar.Root>
    </div>
  )
}

export { CustomSearchBar }
