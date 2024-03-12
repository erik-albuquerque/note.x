import { VariantProps, cva } from 'class-variance-authority'

const themeBackgroundColorVariants = cva(null, {
  variants: {
    theme: {
      coral:
        'data-[color=coral]:bg-coral dark:data-[color=coral]:bg-coral-dark',
      peach:
        'data-[color=peach]:bg-peach dark:data-[color=peach]:bg-peach-dark',
      sand: 'data-[color=sand]:bg-sand dark:data-[color=sand]:bg-sand-dark',
      mint: 'data-[color=mint]:bg-mint dark:data-[color=mint]:bg-mint-dark',
      sage: 'data-[color=sage]:bg-sage dark:data-[color=sage]:bg-sage-dark',
      fog: 'data-[color=fog]:bg-fog dark:data-[color=fog]:bg-fog-dark',
      storm:
        'data-[color=storm]:bg-storm dark:data-[color=storm]:bg-storm-dark',
      dusk: 'data-[color=dusk]:bg-dusk dark:data-[color=dusk]:bg-dusk-dark',
      blossom:
        'data-[color=blossom]:bg-blossom dark:data-[color=blossom]:bg-blossom-dark',
      clay: 'data-[color=clay]:bg-clay dark:data-[color=clay]:bg-clay-dark',
      chalk:
        'data-[color=chalk]:bg-chalk dark:data-[color=chalk]:bg-chalk-dark',
      default: 'bg-background'
    }
  },
  defaultVariants: {
    theme: 'default'
  }
})

export type ThemeBackgroundColorVariantsProps = VariantProps<
  typeof themeBackgroundColorVariants
>

export { themeBackgroundColorVariants }
