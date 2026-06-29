import { mdiMinusCircleMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MinusCircleMultiple(props: IconComponentProps) {
  return <Icon path={mdiMinusCircleMultiple} {...props} />;
}

export { mdiMinusCircleMultiple as path };
