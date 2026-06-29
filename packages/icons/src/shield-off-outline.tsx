import { mdiShieldOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldOffOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldOffOutline} {...props} />;
}

export { mdiShieldOffOutline as path };
