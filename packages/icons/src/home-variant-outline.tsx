import { mdiHomeVariantOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeVariantOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeVariantOutline} {...props} />;
}

export { mdiHomeVariantOutline as path };
