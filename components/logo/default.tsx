// SyS App default logos
import LogoProps from "@/types/logo";

const Logo = ({ width, height }: LogoProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 150H300M200 150L175 250M200 150L100 50M150 350H250M150 350L175 250M150 350L250 450H350M150 350L50 250L100 150M250 350L275 250M250 350L350 450M300 150L275 250M300 150L200 50H100M300 150L400 250L350 350M175 250H275M175 250L100 150M275 250L350 350M100 50V150M350 450V350" stroke="hsl(var(--secondary-foreground))" strokeWidth="40" />
        </svg>
    )
}


const LogoWithText = ({ width, height }: LogoProps) => {
    return (
        <div className="flex items-center text-[20px] space-x-2 justify-start">
            <svg width={width} height={height} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M200 150H300M200 150L175 250M200 150L100 50M150 350H250M150 350L175 250M150 350L250 450H350M150 350L50 250L100 150M250 350L275 250M250 350L350 450M300 150L275 250M300 150L200 50H100M300 150L400 250L350 350M175 250H275M175 250L100 150M275 250L350 350M100 50V150M350 450V350" stroke="hsl(var(--secondary-foreground))" strokeWidth="40" />
            </svg>
            <span className="font-bold font-sans">SyS App</span>
        </div>
    )
}

export { Logo, LogoWithText };