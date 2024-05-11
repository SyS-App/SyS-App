import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import Alert from "@/components/alert_system";
import { TextConfig } from "@/config/text";
import { ClassConfig } from "@/config/class";
import { useEffect, useState } from "react";
import { Divider, Snippet } from "@nextui-org/react";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [GetCurrentYear, SetCurrentYear] = useState(Number);

	useEffect(() => {
		const date = new Date();
		const year = date.getFullYear();
		SetCurrentYear(year);
	})

	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Alert
				text={
					TextConfig
						.alerts
						.inDev
				}
				type={
					ClassConfig
						.alerts
						.primary
				} />
			<Navbar />
			<main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
				{
					children
				}
			</main>
			<footer className="w-full py-3">
				<div className="mt-8" id="coming_soon">
					<Snippet hideSymbol hideCopyButton variant="bordered">
						<span>
							Working in progress ...
						</span>
					</Snippet>
				</div>
				<div className="flex justify-center justify-items-center pb-4">
					<Link
						isExternal
						className="flex items-center gap-1 text-xs"
						href="https://sysrunkang.sysapp.org/"
						title={
							TextConfig
								.footers
								.contributors
								.maintainer
								.project_maintainer
						}
					>
						<span className="text-default-600">
							&copy; 2023-{GetCurrentYear}
						</span>
						<p className="text-primary">{
							TextConfig
								.footers
								.contributors
								.maintainer
								.names
								.rc
						}
						</p>
					</Link>
				</div>
			</footer>
		</div>
	);
}
