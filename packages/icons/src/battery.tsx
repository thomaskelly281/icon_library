import { mdiBattery } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Battery(props: IconComponentProps) {
  return <Icon path={mdiBattery} {...props} />;
}

export { mdiBattery as path };
