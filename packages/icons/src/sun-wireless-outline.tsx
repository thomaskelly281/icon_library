import { mdiSunWirelessOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SunWirelessOutline(props: IconComponentProps) {
  return <Icon path={mdiSunWirelessOutline} {...props} />;
}

export { mdiSunWirelessOutline as path };
