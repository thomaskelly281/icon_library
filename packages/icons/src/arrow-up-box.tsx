import { mdiArrowUpBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpBox(props: IconComponentProps) {
  return <Icon path={mdiArrowUpBox} {...props} />;
}

export { mdiArrowUpBox as path };
