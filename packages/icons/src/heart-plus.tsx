import { mdiHeartPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartPlus(props: IconComponentProps) {
  return <Icon path={mdiHeartPlus} {...props} />;
}

export { mdiHeartPlus as path };
