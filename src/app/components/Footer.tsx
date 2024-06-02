import Link from "next/link";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="block p-4 relative left-0 right-0 bottom-0">
            {/* Footer contents */}
            <div className="flex items-center justify-around flex-row">
                <div className="p-4">
                    <h4 className="text-xl font-bold mb-3" id="projects">
                        Projects
                    </h4>
                    <p>Working in progress ...</p>
                </div>
                <div className="p-4 block">
                    <h4 className="text-xl font-bold mb-3" id="contacts">
                        Contact
                    </h4>
                    <Link href="mailto:chen.runkang10@gmail.com">chen.runkang10@gmail.com</Link>
                </div>
                <div className="p-4">
                    <h4 className="text-xl font-bold mb-3" id="links">
                        Links
                    </h4>
                    <p>...</p>
                </div>
            </div>
             {/* © */}
            <div className="mt-4 p-4">
                <p className="text-center">&copy; {year} <Link href="https://github.com/Runkang10/" className="font-bold">Runkang Chen</Link>, MIT License.</p>
            </div>
        </footer>
    )
}