import { mdiVideoOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoOff(props: IconComponentProps) {
  return <Icon path={mdiVideoOff} {...props} />;
}

export { mdiVideoOff as path };
