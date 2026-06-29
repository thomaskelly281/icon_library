import { mdiArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUp(props: IconComponentProps) {
  return <Icon path={mdiArrowUp} {...props} />;
}

export { mdiArrowUp as path };
