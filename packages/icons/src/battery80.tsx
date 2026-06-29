import { mdiBattery80 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Battery80(props: IconComponentProps) {
  return <Icon path={mdiBattery80} {...props} />;
}

export { mdiBattery80 as path };
