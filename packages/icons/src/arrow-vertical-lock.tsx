import { mdiArrowVerticalLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowVerticalLock(props: IconComponentProps) {
  return <Icon path={mdiArrowVerticalLock} {...props} />;
}

export { mdiArrowVerticalLock as path };
