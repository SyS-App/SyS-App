import { BaseHeroComponentProps } from "@/types/base/hero";

const BaseHeroComponent: React.FC<BaseHeroComponentProps> = ({ children }) => {

    return (
        <div className="flex flex-col justify-center items-center w-full min-h-[550px] homepage">
            {children}
        </div>
    )
}



export { BaseHeroComponent };