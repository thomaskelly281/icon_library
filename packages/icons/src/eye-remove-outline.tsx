import { mdiEyeRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiEyeRemoveOutline} {...props} />;
}

export { mdiEyeRemoveOutline as path };
