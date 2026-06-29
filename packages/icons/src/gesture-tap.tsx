import { mdiGestureTap } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureTap(props: IconComponentProps) {
  return <Icon path={mdiGestureTap} {...props} />;
}

export { mdiGestureTap as path };
