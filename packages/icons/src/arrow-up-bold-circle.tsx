import { mdiArrowUpBoldCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpBoldCircle(props: IconComponentProps) {
  return <Icon path={mdiArrowUpBoldCircle} {...props} />;
}

export { mdiArrowUpBoldCircle as path };
