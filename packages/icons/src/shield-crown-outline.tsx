import { mdiShieldCrownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldCrownOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldCrownOutline} {...props} />;
}

export { mdiShieldCrownOutline as path };
