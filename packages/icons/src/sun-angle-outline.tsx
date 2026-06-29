import { mdiSunAngleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SunAngleOutline(props: IconComponentProps) {
  return <Icon path={mdiSunAngleOutline} {...props} />;
}

export { mdiSunAngleOutline as path };
