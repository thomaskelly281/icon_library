import { mdiCompassOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CompassOffOutline(props: IconComponentProps) {
  return <Icon path={mdiCompassOffOutline} {...props} />;
}

export { mdiCompassOffOutline as path };
