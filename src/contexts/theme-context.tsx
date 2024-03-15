import { createContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'
type SystemTheme = 'dark' | 'light' | null

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  isDarkTheme: boolean
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  isDarkTheme: false,
  setTheme: () => null
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

const ThemeProvider = ({
  children,
  defaultTheme = 'system',
  storageKey = 'note.x-ui-theme',
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  const [systemTheme, setSystemTheme] = useState<SystemTheme>(null)

  const onThemeChanged = (theme: Theme) => {
    localStorage.setItem(storageKey, theme)
    setTheme(theme)
  }

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    setSystemTheme(null)

    if (theme === 'system') {
      const systemTheme =
        window.matchMedia('(prefers-color-scheme: dark)').matches === true
          ? 'dark'
          : 'light'

      setSystemTheme(systemTheme)

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    isDarkTheme: theme === 'dark' || systemTheme === 'dark',
    setTheme: onThemeChanged
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export { ThemeProvider, ThemeProviderContext }
