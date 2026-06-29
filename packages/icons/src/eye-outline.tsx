import { mdiEyeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeOutline(props: IconComponentProps) {
  return <Icon path={mdiEyeOutline} {...props} />;
}

export { mdiEyeOutline as path };
