import { App } from '../app'
import { AppProvider } from '../providers/app-provider.tsx'
import { RenderRoot } from './render-root.tsx'
import './main.css'

RenderRoot(
  <AppProvider>
    <App />
  </AppProvider>
)
