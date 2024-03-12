import { VariantProps, cva } from 'class-variance-authority'

const themeBorderVariants = cva(null, {
  variants: {
    theme: {
      coral:
        'data-[color=coral]:border-coral dark:data-[color=coral]:border-coral-dark',
      peach:
        'data-[color=peach]:border-peach dark:data-[color=peach]:border-peach-dark',
      sand: 'data-[color=sand]:border-sand dark:data-[color=sand]:border-sand-dark',
      mint: 'data-[color=mint]:border-mint dark:data-[color=mint]:border-mint-dark',
      sage: 'data-[color=sage]:border-sage dark:data-[color=sage]:border-sage-dark',
      fog: 'data-[color=fog]:border-fog dark:data-[color=fog]:border-fog-dark',
      storm:
        'data-[color=storm]:border-storm dark:data-[color=storm]:border-storm-dark',
      dusk: 'data-[color=dusk]:border-dusk dark:data-[color=dusk]:border-dusk-dark',
      blossom:
        'data-[color=blossom]:border-blossom dark:data-[color=blossom]:border-blossom-dark',
      clay: 'data-[color=clay]:border-clay dark:data-[color=clay]:border-clay-dark',
      chalk:
        'data-[color=chalk]:border-chalk dark:data-[color=chalk]:border-chalk-dark',
      default: 'border-border'
    }
  },
  defaultVariants: {
    theme: 'default'
  }
})

export type ThemeBorderVariantsProps = VariantProps<typeof themeBorderVariants>

export { themeBorderVariants }
