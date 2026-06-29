import { mdiShieldCrossOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldCrossOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldCrossOutline} {...props} />;
}

export { mdiShieldCrossOutline as path };
