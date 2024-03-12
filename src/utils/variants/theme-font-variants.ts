import { VariantProps, cva } from 'class-variance-authority'

const themeFontVariants = cva(null, {
  variants: {
    theme: {
      kode_mono: 'font-kode_mono',
      ubuntu: 'font-ubuntu',
      pixelify_sans: 'font-pixelify_sans',
      lora: 'font-lora',
      jetBrains_mono: 'font-jetBrains_mono',
      roboto: 'font-roboto',
      default: 'font-inter'
    }
  },
  defaultVariants: {
    theme: 'default'
  }
})

export type ThemeFontVariantsProps = VariantProps<typeof themeFontVariants>

export { themeFontVariants }
