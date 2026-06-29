import { mdiMinusCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MinusCircle(props: IconComponentProps) {
  return <Icon path={mdiMinusCircle} {...props} />;
}

export { mdiMinusCircle as path };
