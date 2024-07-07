import { BasePageProps } from "@/types/base/base";


const BasePage: React.FC<BasePageProps> = ({ children, styles }) => {

    return (
        <div className={`flex flex-col w-full min-h-[500px] ${styles ?? ""}`}>
            {children}
        </div>
    )
}


export { BasePage };