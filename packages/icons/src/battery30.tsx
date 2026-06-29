import { mdiBattery30 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Battery30(props: IconComponentProps) {
  return <Icon path={mdiBattery30} {...props} />;
}

export { mdiBattery30 as path };
