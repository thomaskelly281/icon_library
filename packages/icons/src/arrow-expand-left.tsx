import { mdiArrowExpandLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowExpandLeft(props: IconComponentProps) {
  return <Icon path={mdiArrowExpandLeft} {...props} />;
}

export { mdiArrowExpandLeft as path };
