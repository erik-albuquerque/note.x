type Font =
  | 'kode_mono'
  | 'ubuntu'
  | 'pixelify_sans'
  | 'lora'
  | 'jetBrains_mono'
  | 'roboto'
  | 'default'

type FontObjectType = {
  [key in Font]: string
}

export type { Font, FontObjectType }
