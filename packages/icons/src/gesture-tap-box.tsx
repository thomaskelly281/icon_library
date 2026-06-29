import { mdiGestureTapBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureTapBox(props: IconComponentProps) {
  return <Icon path={mdiGestureTapBox} {...props} />;
}

export { mdiGestureTapBox as path };
