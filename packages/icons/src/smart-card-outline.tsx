import { mdiSmartCardOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmartCardOutline(props: IconComponentProps) {
  return <Icon path={mdiSmartCardOutline} {...props} />;
}

export { mdiSmartCardOutline as path };
