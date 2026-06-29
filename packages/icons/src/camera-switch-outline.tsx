import { mdiCameraSwitchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraSwitchOutline(props: IconComponentProps) {
  return <Icon path={mdiCameraSwitchOutline} {...props} />;
}

export { mdiCameraSwitchOutline as path };
