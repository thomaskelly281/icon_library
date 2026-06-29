import { mdiGestureTapHold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureTapHold(props: IconComponentProps) {
  return <Icon path={mdiGestureTapHold} {...props} />;
}

export { mdiGestureTapHold as path };
