import { mdiHeartHalfFull } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartHalfFull(props: IconComponentProps) {
  return <Icon path={mdiHeartHalfFull} {...props} />;
}

export { mdiHeartHalfFull as path };
