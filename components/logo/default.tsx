// SyS App default logos
import { LogoProps } from "@/types/logo";

const Logo: React.FC<LogoProps> = ({ width, height }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 150H300M200 150L175 250M200 150L100 50M150 350H250M150 350L175 250M150 350L250 450H350M150 350L50 250L100 150M250 350L275 250M250 350L350 450M300 150L275 250M300 150L200 50H100M300 150L400 250L350 350M175 250H275M175 250L100 150M275 250L350 350M100 50V150M350 450V350" stroke="hsl(var(--secondary-foreground))" strokeWidth="40" />
        </svg>
    )
}


const LogoWithText: React.FC<LogoProps> = ({ width, height }) => {
    return (
        <div className="flex items-center text-[20px] space-x-2 justify-start">
            <svg width={width} height={height} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M200 150H300M200 150L175 250M200 150L100 50M150 350H250M150 350L175 250M150 350L250 450H350M150 350L50 250L100 150M250 350L275 250M250 350L350 450M300 150L275 250M300 150L200 50H100M300 150L400 250L350 350M175 250H275M175 250L100 150M275 250L350 350M100 50V150M350 450V350" stroke="hsl(var(--secondary-foreground))" strokeWidth="40" />
            </svg>
            <span className="font-bold font-sans">SyS App</span>
        </div>
    )
}


const LogoSM: React.FC<LogoProps> = ({ width, height }) => {
    return (
        <svg width={width ?? "702"} height={height ?? "802"} viewBox="0 0 702 802" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M101 1H301L501 201M101 1V201M101 1L301 201M601 601L701 401L501 201M601 601V801M601 601L451 401M601 801H401L201 601M601 801L401 601M101 201L1 401L201 601M101 201L251 401M201 601H401M201 601L251 401M301 201H501M301 201L251 401M501 201L451 401M401 601L451 401M251 401H451" stroke="white" />
        </svg>
    )
}


export { Logo, LogoWithText, LogoSM };