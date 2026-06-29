import { mdiArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDown(props: IconComponentProps) {
  return <Icon path={mdiArrowDown} {...props} />;
}

export { mdiArrowDown as path };
