import { mdiShareVariantOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShareVariantOutline(props: IconComponentProps) {
  return <Icon path={mdiShareVariantOutline} {...props} />;
}

export { mdiShareVariantOutline as path };
