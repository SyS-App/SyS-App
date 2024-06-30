
interface LogoProps {
    width: number | string,
    height: number | string
}

export function Logo({ width, height }: LogoProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 150H300M200 150L175 250M200 150L100 50M150 350H250M150 350L175 250M150 350L250 450H350M150 350L50 250L100 150M250 350L275 250M250 350L350 450M300 150L275 250M300 150L200 50H100M300 150L400 250L350 350M175 250H275M175 250L100 150M275 250L350 350M100 50V150M350 450V350" stroke="hsl(var(--secondary-foreground))" strokeWidth="40" />
        </svg>
    )
}


export function LogoWithText({ width, height }: LogoProps) {
    return (
        <div className="flex items-center text-[20px] space-x-2 justify-start">
            <svg width={width} height={height} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M200 150H300M200 150L175 250M200 150L100 50M150 350H250M150 350L175 250M150 350L250 450H350M150 350L50 250L100 150M250 350L275 250M250 350L350 450M300 150L275 250M300 150L200 50H100M300 150L400 250L350 350M175 250H275M175 250L100 150M275 250L350 350M100 50V150M350 450V350" stroke="hsl(var(--secondary-foreground))" strokeWidth="40" />
            </svg>
            <span className="font-bold font-sans">SyS App</span>
        </div>
    )
}


export function GithubLogo({ width, height }: LogoProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 98 98" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="hsl(var(--muted-foreground))" />
        </svg>
    )
}


export function XLogo({ width, height }: LogoProps) {
    return (
        <svg fill="none" width={width} height={height} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill="hsl(var(--muted-foreground))" stroke="none" d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" />
        </svg>
    )
}