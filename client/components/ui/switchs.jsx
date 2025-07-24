import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/components/lib/utils" // ✅ correct path to your cn helper

export const Switch = React.forwardRef(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
        ref={ref}
        className={cn(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-300 dark:bg-gray-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#7F27FF] focus:ring-offset-2",
            className
        )}
        {...props}
    >
        <SwitchPrimitives.Thumb
            className={cn(
                "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out peer-checked:translate-x-5 peer-checked:bg-[#7F27FF]"
            )}
        />
    </SwitchPrimitives.Root>
))

Switch.displayName = "Switch"
