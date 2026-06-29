import { mdiFridgeVariantAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FridgeVariantAlert(props: IconComponentProps) {
  return <Icon path={mdiFridgeVariantAlert} {...props} />;
}

export { mdiFridgeVariantAlert as path };
