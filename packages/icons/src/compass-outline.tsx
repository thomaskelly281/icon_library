import { mdiCompassOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CompassOutline(props: IconComponentProps) {
  return <Icon path={mdiCompassOutline} {...props} />;
}

export { mdiCompassOutline as path };
