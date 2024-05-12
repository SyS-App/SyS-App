import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import Alert from "@/components/alert_system";
import { TextConfig } from "@/config/text";
import { ClassConfig } from "@/config/class";
import { useEffect, useState } from "react";
import { Divider, Snippet } from "@nextui-org/react";
import axios from "axios";

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
	});

	const [GetVersion, SetVersion] = useState("");

	useEffect(() => {
		async function request_and_get_version() {
			try {
				const TOKEN = "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";
				const headers = {
					Authorization: `token ${TOKEN}`,
				}
				await axios.get("https://api.github.com/repos/SyS-App/SyS-App/releases/latest", { headers })
					.then(response => {
						if (response.data.tag_name) {
							const TagName = response.data.tag_name;
							const cleanTagName = TagName.replace(/^v/, '');
							
							SetVersion(cleanTagName);
						} else {
							SetVersion("undefined");
						}
					})
					.catch(error => {
						console.error("Check failed: ", error.response.request.status)
						SetVersion("undefined");
					})
			} catch (Err) {
				SetVersion("undefined");
			}
		}

		request_and_get_version()
	});

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
			<footer className="w-full py-4">
				<div className="flex justify-center justify-items-center mt-8 my-4" id="coming_soon">
					<Snippet
						hideSymbol
						hideCopyButton
						variant="bordered"
					>
						<span>
							Working in progress ...
						</span>
					</Snippet>
				</div>
				<div className="flex justify-around justify-items-center pb-4">
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
					<Link
						isExternal
						href="https://github.com/SyS-App/SyS-App/releases/latest"
						title="Website version."
						id="version"
					>
						<Snippet
							hideSymbol
							hideCopyButton
						>
							<span>
								Version: {GetVersion}
							</span>
						</Snippet>
					</Link>
				</div>
			</footer>
		</div>
	);
}
