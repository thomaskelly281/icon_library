import { mdiMotionPauseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MotionPauseOutline(props: IconComponentProps) {
  return <Icon path={mdiMotionPauseOutline} {...props} />;
}

export { mdiMotionPauseOutline as path };
