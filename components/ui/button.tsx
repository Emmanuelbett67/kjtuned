import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-primary text-black hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 transform",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 hover:scale-105 hover:shadow-xl hover:shadow-destructive/25 transform focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60 hover:scale-105 transform backdrop-blur-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 transform",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:scale-105 transform dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105 transform",
      },
      size: {
        default: "h-12 px-6 py-3 has-[>svg]:px-5",
        sm: "h-10 rounded-lg gap-1.5 px-4 has-[>svg]:px-3.5",
        lg: "h-14 rounded-xl px-8 py-4 text-base has-[>svg]:px-6",
        icon: "size-12",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
