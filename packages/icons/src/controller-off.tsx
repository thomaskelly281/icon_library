import { mdiControllerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ControllerOff(props: IconComponentProps) {
  return <Icon path={mdiControllerOff} {...props} />;
}

export { mdiControllerOff as path };
