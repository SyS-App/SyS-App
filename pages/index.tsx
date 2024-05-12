import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DiscordIcon, GithubIcon, SearchIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {

	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title({ color: "violet" })}>Free&nbsp;</h1>
					<h1 className={title()}>and&nbsp;</h1>
					<h1 className={title({ color: "violet" })}>Open-source&nbsp;</h1>
					<h4 className={subtitle({ class: "mt-4" })}>
						Projects, created and maintained Since <strong>Age 14</strong>&nbsp;
					</h4>
				</div>

				<div className="flex gap-3">
					<Link
						href="#explore"
						className={buttonStyles({
							color: "primary",
							radius: "full",
							variant: "shadow",
						})}
					>
						<SearchIcon size={20}/>
						Explore
					</Link>
					<Link
						isExternal
						className={buttonStyles({
							color: "secondary",
							variant: "bordered",
							radius: "full"
						})}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
					<Link
						isExternal
						className={buttonStyles({
							variant: "bordered",
							radius: "full"
						})}
						href={siteConfig.links.discord}
					>
						<DiscordIcon size={20} />
						Discord
					</Link>
				</div>

			</section>
		</DefaultLayout>
	);
}
