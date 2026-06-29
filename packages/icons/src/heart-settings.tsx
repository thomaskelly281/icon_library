import { mdiHeartSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartSettings(props: IconComponentProps) {
  return <Icon path={mdiHeartSettings} {...props} />;
}

export { mdiHeartSettings as path };
