import { mdiArrowDownThick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDownThick(props: IconComponentProps) {
  return <Icon path={mdiArrowDownThick} {...props} />;
}

export { mdiArrowDownThick as path };
