import { BasePageProps } from "@/types/base/base";


const BasePage: React.FC<BasePageProps> = ({ children, styles }) => {

    return (
        <div className={`w-full min-h-[500px] ${styles}`}>
            {children}
        </div>
    )
}


export { BasePage };