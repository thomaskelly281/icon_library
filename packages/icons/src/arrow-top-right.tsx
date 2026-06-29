import { mdiArrowTopRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowTopRight(props: IconComponentProps) {
  return <Icon path={mdiArrowTopRight} {...props} />;
}

export { mdiArrowTopRight as path };
