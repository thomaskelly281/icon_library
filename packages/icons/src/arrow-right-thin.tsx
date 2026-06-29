import { mdiArrowRightThin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowRightThin(props: IconComponentProps) {
  return <Icon path={mdiArrowRightThin} {...props} />;
}

export { mdiArrowRightThin as path };
