import { BaseHeroComponentProps } from "@/types/base/hero";

const BaseHeroComponent: React.FC<BaseHeroComponentProps> = ({ children }) => {

    return (
        <div className="flex flex-col justify-center items-center w-full min-h-[400px] border-b">
            {children}
        </div>
    )
}



export { BaseHeroComponent };