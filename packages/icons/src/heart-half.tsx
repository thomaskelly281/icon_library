import { mdiHeartHalf } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartHalf(props: IconComponentProps) {
  return <Icon path={mdiHeartHalf} {...props} />;
}

export { mdiHeartHalf as path };
