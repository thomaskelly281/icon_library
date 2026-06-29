import { mdiShieldRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldRemoveOutline} {...props} />;
}

export { mdiShieldRemoveOutline as path };
