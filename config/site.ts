import FooterData from "@/footer.json";
import { Footer, FooterItem } from "@/types/footer";

const MetaConfig = {
    title: "SyS App",
    description: "Developed and maintained since age 14."
}

const FooterConfig: Footer[] = FooterData.sections;
const FooterConfigItems: FooterItem[] = FooterData.items;

export { MetaConfig, FooterConfig, FooterConfigItems }