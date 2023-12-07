import { useState } from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible"
import { cn } from "../lib/cn"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string
}

export const CodeBlock = ({ expandButtonTitle = "View Code",
  className,
  children,
  ...props }: CodeBlockProps) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened} className="my-5">
      <div className={cn("relative overflow-hidden", className)} {...props}>
        <CollapsibleContent
          forceMount
          className={cn("overflow-hidden", !isOpened && " max-h-44")}
        >
          <div
            className={cn(
              "[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[50px]",
              !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto]"
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            "absolute flex items-center justify-center bg-gradient-to-b from-[#162226]/30 to-[#162226]/100 p-2",
            isOpened ? "inset-x-0 bottom-0 h-12" : "inset-0"
          )}
        >
          <CollapsibleTrigger asChild>
            <button className="h-8 font-geist_mono text-lg">
              {isOpened ? "Collapse" : expandButtonTitle}
            </button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  )
}