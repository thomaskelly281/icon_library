import { mdiShareOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShareOff(props: IconComponentProps) {
  return <Icon path={mdiShareOff} {...props} />;
}

export { mdiShareOff as path };
