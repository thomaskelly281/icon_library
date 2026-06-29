import { mdiArrowDownThin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDownThin(props: IconComponentProps) {
  return <Icon path={mdiArrowDownThin} {...props} />;
}

export { mdiArrowDownThin as path };
