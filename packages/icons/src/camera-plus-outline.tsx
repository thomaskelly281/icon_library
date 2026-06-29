import { mdiCameraPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiCameraPlusOutline} {...props} />;
}

export { mdiCameraPlusOutline as path };
