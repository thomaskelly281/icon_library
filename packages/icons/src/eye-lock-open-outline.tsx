import { mdiEyeLockOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeLockOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiEyeLockOpenOutline} {...props} />;
}

export { mdiEyeLockOpenOutline as path };
