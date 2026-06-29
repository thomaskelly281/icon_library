import { mdiBattery10 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Battery10(props: IconComponentProps) {
  return <Icon path={mdiBattery10} {...props} />;
}

export { mdiBattery10 as path };
