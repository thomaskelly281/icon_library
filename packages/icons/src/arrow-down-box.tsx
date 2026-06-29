import { mdiArrowDownBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDownBox(props: IconComponentProps) {
  return <Icon path={mdiArrowDownBox} {...props} />;
}

export { mdiArrowDownBox as path };
