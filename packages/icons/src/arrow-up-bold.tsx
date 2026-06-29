import { mdiArrowUpBold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpBold(props: IconComponentProps) {
  return <Icon path={mdiArrowUpBold} {...props} />;
}

export { mdiArrowUpBold as path };
