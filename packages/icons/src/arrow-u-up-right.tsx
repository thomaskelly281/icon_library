import { mdiArrowUUpRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUUpRight(props: IconComponentProps) {
  return <Icon path={mdiArrowUUpRight} {...props} />;
}

export { mdiArrowUUpRight as path };
