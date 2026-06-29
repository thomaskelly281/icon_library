import { mdiArrowUpRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpRight(props: IconComponentProps) {
  return <Icon path={mdiArrowUpRight} {...props} />;
}

export { mdiArrowUpRight as path };
