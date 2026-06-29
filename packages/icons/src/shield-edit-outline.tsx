import { mdiShieldEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldEditOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldEditOutline} {...props} />;
}

export { mdiShieldEditOutline as path };
