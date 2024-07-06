import { BaseHeroComponentProps } from "@/types/base/hero";

const BaseHeroComponent: React.FC<BaseHeroComponentProps> = ({ children }) => {

    return (
        <div className="flex flex-col justify-center items-center w-full min-h-[500px] homepage_img border">
            {children}
        </div>
    )
}



export { BaseHeroComponent };