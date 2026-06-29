import { mdiBagCarryOnOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BagCarryOnOff(props: IconComponentProps) {
  return <Icon path={mdiBagCarryOnOff} {...props} />;
}

export { mdiBagCarryOnOff as path };
