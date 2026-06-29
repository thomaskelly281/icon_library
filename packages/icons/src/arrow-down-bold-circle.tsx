import { mdiArrowDownBoldCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDownBoldCircle(props: IconComponentProps) {
  return <Icon path={mdiArrowDownBoldCircle} {...props} />;
}

export { mdiArrowDownBoldCircle as path };
