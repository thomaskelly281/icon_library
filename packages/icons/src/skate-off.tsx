import { mdiSkateOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkateOff(props: IconComponentProps) {
  return <Icon path={mdiSkateOff} {...props} />;
}

export { mdiSkateOff as path };
