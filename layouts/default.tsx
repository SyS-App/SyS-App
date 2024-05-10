import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://sysrunkang.sysapp.org/"
					title="Project Maintainer & Owner"
				>
					<span className="text-default-600">&copy; 2023-2024</span>
					<p className="text-primary">Runkang Chen</p>
				</Link>
			</footer>
		</div>
	);
}
