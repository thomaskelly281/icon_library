import { mdiCannabisOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CannabisOff(props: IconComponentProps) {
  return <Icon path={mdiCannabisOff} {...props} />;
}

export { mdiCannabisOff as path };
