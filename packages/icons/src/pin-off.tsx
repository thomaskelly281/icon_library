import { mdiPinOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PinOff(props: IconComponentProps) {
  return <Icon path={mdiPinOff} {...props} />;
}

export { mdiPinOff as path };
