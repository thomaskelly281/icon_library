import { mdiPowerPlugOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerPlugOutline(props: IconComponentProps) {
  return <Icon path={mdiPowerPlugOutline} {...props} />;
}

export { mdiPowerPlugOutline as path };
