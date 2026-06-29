import { mdiHeartPulse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartPulse(props: IconComponentProps) {
  return <Icon path={mdiHeartPulse} {...props} />;
}

export { mdiHeartPulse as path };
