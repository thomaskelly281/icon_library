import { mdiHeartFlash } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartFlash(props: IconComponentProps) {
  return <Icon path={mdiHeartFlash} {...props} />;
}

export { mdiHeartFlash as path };
