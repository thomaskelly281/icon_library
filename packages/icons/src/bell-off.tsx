import { mdiBellOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellOff(props: IconComponentProps) {
  return <Icon path={mdiBellOff} {...props} />;
}

export { mdiBellOff as path };
