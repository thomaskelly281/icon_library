import { mdiGestureTwoTap } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureTwoTap(props: IconComponentProps) {
  return <Icon path={mdiGestureTwoTap} {...props} />;
}

export { mdiGestureTwoTap as path };
