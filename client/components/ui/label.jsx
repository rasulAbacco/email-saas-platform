import * as React from "react"
import { cn } from "../../components/lib/utils"

export const Label = React.forwardRef(({ className, ...props }, ref) => (
    <label
        ref={ref}
        className={cn(
            "text-sm font-medium leading-none text-black dark:text-white",
            className
        )}
        {...props}
    />
))

Label.displayName = "Label"



