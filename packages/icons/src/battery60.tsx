import { mdiBattery60 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Battery60(props: IconComponentProps) {
  return <Icon path={mdiBattery60} {...props} />;
}

export { mdiBattery60 as path };
