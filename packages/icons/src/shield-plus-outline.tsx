import { mdiShieldPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldPlusOutline} {...props} />;
}

export { mdiShieldPlusOutline as path };
