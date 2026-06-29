import { mdiArrowHorizontalLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowHorizontalLock(props: IconComponentProps) {
  return <Icon path={mdiArrowHorizontalLock} {...props} />;
}

export { mdiArrowHorizontalLock as path };
