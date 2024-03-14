

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
export function Alerts({variant}:any) {

    switch (variant) {
        case "error":
            return (
                <Alert variant="destructive" className=" flex flex-row gap-2 items-start animate-pulse">
                    <span className="material-symbols-outlined">
                    error
                    </span>
                    <div>
                        <AlertTitle>Invalid Credentials</AlertTitle>
                        <AlertDescription>
                           Your credentials are incorrect, please try again.
                        </AlertDescription>
                    </div>
                </Alert>
            )
        case "success":
            return (
                <Alert  className=" flex flex-row gap-2 items-start animate-pulse bg-transparent border-green-600 border">
                    <span className="material-symbols-outlined text-green-600">
                    task_alt
                    </span>
                    <div className=" text-green-600">
                        <AlertTitle>Successfully Login</AlertTitle>
                        <AlertDescription>
                           Your credentials are correct, please wait for awhile.
                        </AlertDescription>
                    </div>
                </Alert>
            )
            case "warning":
                return (
                    <Alert  className=" flex flex-row gap-2 items-start animate-pulse bg-transparent border-yellow border">
                        <span className="material-symbols-outlined text-yellow">
                        warning
                        </span>
                        <div className=" text-yellow">
                            <AlertTitle>Warning</AlertTitle>
                            <AlertDescription>
                               Your credentials are correct, but needs to be activated.
                            </AlertDescription>
                        </div>
                    </Alert>
                )

    
        default:
            break;
    }
   
}
