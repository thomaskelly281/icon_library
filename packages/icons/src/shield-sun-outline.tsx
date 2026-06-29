import { mdiShieldSunOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldSunOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldSunOutline} {...props} />;
}

export { mdiShieldSunOutline as path };
