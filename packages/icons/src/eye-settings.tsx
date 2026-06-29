import { mdiEyeSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeSettings(props: IconComponentProps) {
  return <Icon path={mdiEyeSettings} {...props} />;
}

export { mdiEyeSettings as path };
