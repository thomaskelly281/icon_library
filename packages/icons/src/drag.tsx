import { mdiDrag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Drag(props: IconComponentProps) {
  return <Icon path={mdiDrag} {...props} />;
}

export { mdiDrag as path };
