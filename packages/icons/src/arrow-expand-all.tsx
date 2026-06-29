import { mdiArrowExpandAll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowExpandAll(props: IconComponentProps) {
  return <Icon path={mdiArrowExpandAll} {...props} />;
}

export { mdiArrowExpandAll as path };
