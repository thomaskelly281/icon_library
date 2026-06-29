import { mdiArrowDownRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDownRight(props: IconComponentProps) {
  return <Icon path={mdiArrowDownRight} {...props} />;
}

export { mdiArrowDownRight as path };
