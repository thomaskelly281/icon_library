import { mdiArrowExpandUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowExpandUp(props: IconComponentProps) {
  return <Icon path={mdiArrowExpandUp} {...props} />;
}

export { mdiArrowExpandUp as path };
