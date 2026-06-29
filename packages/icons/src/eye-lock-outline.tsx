import { mdiEyeLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeLockOutline(props: IconComponentProps) {
  return <Icon path={mdiEyeLockOutline} {...props} />;
}

export { mdiEyeLockOutline as path };
