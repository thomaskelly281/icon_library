import { mdiHeartCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartCircle(props: IconComponentProps) {
  return <Icon path={mdiHeartCircle} {...props} />;
}

export { mdiHeartCircle as path };
