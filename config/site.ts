// Website configs
import FooterData from "@/footer.json";
import { Footer, FooterItem } from "@/types/footer";

// Default metadata
const MetaConfig = {
    title: "SyS App",
    description: "Developed and maintained since age 14."
}

// Footer items loaded from json files
const FooterConfig: Footer[] = FooterData.sections;
const FooterConfigItems: FooterItem[] = FooterData.items;

export { MetaConfig, FooterConfig, FooterConfigItems }