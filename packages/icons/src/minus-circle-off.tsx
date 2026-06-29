import { mdiMinusCircleOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MinusCircleOff(props: IconComponentProps) {
  return <Icon path={mdiMinusCircleOff} {...props} />;
}

export { mdiMinusCircleOff as path };
