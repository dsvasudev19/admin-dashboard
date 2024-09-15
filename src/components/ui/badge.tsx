import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-white shadow hover:bg-primary/80",
        secondary:
          "border-gray-500 bg-gray-200 text-black hover:bg-secondary/80",
        destructive:
          "border-transparent bg-red-900 text-white shadow hover:bg-destructive/80",
        success:
          "border-green-500 bg-green-200 text-green-700 shadow hover:bg-destructive/80 hover:cursor-pointer",
        danger:
          "border-red-500 bg-red-200 text-red-700 shadow hover:bg-destructive/80 hover:cursor-pointer",
        warning:
          "border-yellow-500 bg-yellow-200 text-yellow-700 shadow hover:bg-destructive/80 hover:cursor-pointer",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
