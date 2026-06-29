import { mdiArrowUpLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpLeft(props: IconComponentProps) {
  return <Icon path={mdiArrowUpLeft} {...props} />;
}

export { mdiArrowUpLeft as path };
