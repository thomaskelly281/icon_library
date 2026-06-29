import { mdiSmartCardOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmartCardOffOutline(props: IconComponentProps) {
  return <Icon path={mdiSmartCardOffOutline} {...props} />;
}

export { mdiSmartCardOffOutline as path };
