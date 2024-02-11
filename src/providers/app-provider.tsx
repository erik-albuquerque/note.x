import { PropsWithChildren } from 'react'

import { ThemeProvider } from '../contexts/theme-context'

const AppProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
}

export { AppProvider }
