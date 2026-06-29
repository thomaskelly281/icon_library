import { mdiVideoSwitchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoSwitchOutline(props: IconComponentProps) {
  return <Icon path={mdiVideoSwitchOutline} {...props} />;
}

export { mdiVideoSwitchOutline as path };
