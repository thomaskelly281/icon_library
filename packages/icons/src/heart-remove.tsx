import { mdiHeartRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartRemove(props: IconComponentProps) {
  return <Icon path={mdiHeartRemove} {...props} />;
}

export { mdiHeartRemove as path };
