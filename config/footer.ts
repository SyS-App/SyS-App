import FooterData from "@/footer.json";
import { Footer, FooterItem } from "@/types/footer";

const FooterConfig: Footer[] = FooterData.sections;
const FooterConfigItems: FooterItem[] = FooterData.items;


export { FooterConfig, FooterConfigItems };