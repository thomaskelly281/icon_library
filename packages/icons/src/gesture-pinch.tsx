import { mdiGesturePinch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GesturePinch(props: IconComponentProps) {
  return <Icon path={mdiGesturePinch} {...props} />;
}

export { mdiGesturePinch as path };
