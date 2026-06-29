import { mdiArrowExpandHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowExpandHorizontal(props: IconComponentProps) {
  return <Icon path={mdiArrowExpandHorizontal} {...props} />;
}

export { mdiArrowExpandHorizontal as path };
