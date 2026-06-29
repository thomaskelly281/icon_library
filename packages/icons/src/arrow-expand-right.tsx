import { mdiArrowExpandRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowExpandRight(props: IconComponentProps) {
  return <Icon path={mdiArrowExpandRight} {...props} />;
}

export { mdiArrowExpandRight as path };
