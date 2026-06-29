import { mdiArrowExpandDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowExpandDown(props: IconComponentProps) {
  return <Icon path={mdiArrowExpandDown} {...props} />;
}

export { mdiArrowExpandDown as path };
