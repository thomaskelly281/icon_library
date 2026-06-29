import { mdiMotionPlayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MotionPlayOutline(props: IconComponentProps) {
  return <Icon path={mdiMotionPlayOutline} {...props} />;
}

export { mdiMotionPlayOutline as path };
