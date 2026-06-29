import { mdiSelectDrag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectDrag(props: IconComponentProps) {
  return <Icon path={mdiSelectDrag} {...props} />;
}

export { mdiSelectDrag as path };
