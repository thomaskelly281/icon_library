import { mdiBagCarryOn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BagCarryOn(props: IconComponentProps) {
  return <Icon path={mdiBagCarryOn} {...props} />;
}

export { mdiBagCarryOn as path };
