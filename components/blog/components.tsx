// Blog components
import { BaseBlogComponentProps } from "@/types/blog";

// Single 
const BaseBlogComponent: React.FC<BaseBlogComponentProps> = ({ children }) => {
    return (
        <div className="my-4 mx-8 min-h-[500px]">
            {children}
        </div>
    )
}

const BaseBlogComponentTitle: React.FC<BaseBlogComponentProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}






export { BaseBlogComponent, BaseBlogComponentTitle };