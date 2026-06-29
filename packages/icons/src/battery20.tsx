import { mdiBattery20 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Battery20(props: IconComponentProps) {
  return <Icon path={mdiBattery20} {...props} />;
}

export { mdiBattery20 as path };
