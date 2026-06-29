import { mdiEyeCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiEyeCircleOutline} {...props} />;
}

export { mdiEyeCircleOutline as path };
