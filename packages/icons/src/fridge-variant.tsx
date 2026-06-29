import { mdiFridgeVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FridgeVariant(props: IconComponentProps) {
  return <Icon path={mdiFridgeVariant} {...props} />;
}

export { mdiFridgeVariant as path };
