import { mdiCurling } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Curling(props: IconComponentProps) {
  return <Icon path={mdiCurling} {...props} />;
}

export { mdiCurling as path };
