import { mdiShieldStarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldStarOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldStarOutline} {...props} />;
}

export { mdiShieldStarOutline as path };
