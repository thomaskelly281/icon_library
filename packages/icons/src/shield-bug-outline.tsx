import { mdiShieldBugOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldBugOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldBugOutline} {...props} />;
}

export { mdiShieldBugOutline as path };
