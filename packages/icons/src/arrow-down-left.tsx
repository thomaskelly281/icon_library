import { mdiArrowDownLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDownLeft(props: IconComponentProps) {
  return <Icon path={mdiArrowDownLeft} {...props} />;
}

export { mdiArrowDownLeft as path };
