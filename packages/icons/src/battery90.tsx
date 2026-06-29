import { mdiBattery90 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Battery90(props: IconComponentProps) {
  return <Icon path={mdiBattery90} {...props} />;
}

export { mdiBattery90 as path };
