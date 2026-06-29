import { mdiEyeCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiEyeCheckOutline} {...props} />;
}

export { mdiEyeCheckOutline as path };
