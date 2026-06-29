import { mdiBattery40 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Battery40(props: IconComponentProps) {
  return <Icon path={mdiBattery40} {...props} />;
}

export { mdiBattery40 as path };
