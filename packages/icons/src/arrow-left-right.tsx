import { mdiArrowLeftRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftRight(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftRight} {...props} />;
}

export { mdiArrowLeftRight as path };
