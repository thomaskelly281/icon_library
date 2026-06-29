import { mdiGestureSpread } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureSpread(props: IconComponentProps) {
  return <Icon path={mdiGestureSpread} {...props} />;
}

export { mdiGestureSpread as path };
