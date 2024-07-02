import { BugReportProps } from "@/types/bug";

const BugReport = ({ type="nav" }: BugReportProps) => {
    return (
        <div className={`${type === "nav"?"":""}`}>

        </div>
    )
}

export default BugReport;