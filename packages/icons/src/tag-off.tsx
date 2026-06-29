import { mdiTagOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagOff(props: IconComponentProps) {
  return <Icon path={mdiTagOff} {...props} />;
}

export { mdiTagOff as path };
