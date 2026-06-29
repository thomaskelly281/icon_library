import { mdiHeartBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartBox(props: IconComponentProps) {
  return <Icon path={mdiHeartBox} {...props} />;
}

export { mdiHeartBox as path };
