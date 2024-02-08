import { Toaster } from 'sonner'

import { App } from '../app'
import { RenderRoot } from './render-root.tsx'
import './main.css'

RenderRoot(
  <>
    <App />
    <Toaster richColors theme="dark" />
  </>
)
