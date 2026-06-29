import { mdiArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowRight(props: IconComponentProps) {
  return <Icon path={mdiArrowRight} {...props} />;
}

export { mdiArrowRight as path };
