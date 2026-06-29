import { mdiBagCarryOnCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BagCarryOnCheck(props: IconComponentProps) {
  return <Icon path={mdiBagCarryOnCheck} {...props} />;
}

export { mdiBagCarryOnCheck as path };
