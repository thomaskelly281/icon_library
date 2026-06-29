import { mdiMotionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MotionOutline(props: IconComponentProps) {
  return <Icon path={mdiMotionOutline} {...props} />;
}

export { mdiMotionOutline as path };
