import { mdiArrangeBringToFront } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrangeBringToFront(props: IconComponentProps) {
  return <Icon path={mdiArrangeBringToFront} {...props} />;
}

export { mdiArrangeBringToFront as path };
