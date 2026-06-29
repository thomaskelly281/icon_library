import { mdiBattery50 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Battery50(props: IconComponentProps) {
  return <Icon path={mdiBattery50} {...props} />;
}

export { mdiBattery50 as path };
