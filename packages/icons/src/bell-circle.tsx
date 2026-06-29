import { mdiBellCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellCircle(props: IconComponentProps) {
  return <Icon path={mdiBellCircle} {...props} />;
}

export { mdiBellCircle as path };
