import { mdiArrowLeftThin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftThin(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftThin} {...props} />;
}

export { mdiArrowLeftThin as path };
