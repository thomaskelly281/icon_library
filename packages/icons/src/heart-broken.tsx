import { mdiHeartBroken } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartBroken(props: IconComponentProps) {
  return <Icon path={mdiHeartBroken} {...props} />;
}

export { mdiHeartBroken as path };
