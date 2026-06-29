import { mdiEyePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiEyePlusOutline} {...props} />;
}

export { mdiEyePlusOutline as path };
