import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"


export function AlertCore() {
  return (
    <Alert variant="default" className="z-10 bg-sky-700 text-white">
      <AlertDescription className="flex items-center justify-between">
        <div className="flex items-center">
            <AlertCircle className="w-[1rem] h-[1rem] mr-2" />
            Working in progress ...
        </div>
        <div>
            <span><Link className={(buttonVariants({ variant: "link" }), "h-0 text-white p-0")} href="https://github.com/SyS-App/SyS-App/">Source code</Link></span>
        </div>
      </AlertDescription>
    </Alert>
  )
}