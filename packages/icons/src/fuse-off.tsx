import { mdiFuseOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FuseOff(props: IconComponentProps) {
  return <Icon path={mdiFuseOff} {...props} />;
}

export { mdiFuseOff as path };
