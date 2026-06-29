import { mdiShieldAirplaneOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldAirplaneOutline(props: IconComponentProps) {
  return <Icon path={mdiShieldAirplaneOutline} {...props} />;
}

export { mdiShieldAirplaneOutline as path };
