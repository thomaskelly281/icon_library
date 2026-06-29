import { mdiWindPowerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindPowerOutline(props: IconComponentProps) {
  return <Icon path={mdiWindPowerOutline} {...props} />;
}

export { mdiWindPowerOutline as path };
