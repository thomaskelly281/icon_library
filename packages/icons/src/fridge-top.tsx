import { mdiFridgeTop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FridgeTop(props: IconComponentProps) {
  return <Icon path={mdiFridgeTop} {...props} />;
}

export { mdiFridgeTop as path };
