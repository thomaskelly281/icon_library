import { mdiArrowUpDownBold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpDownBold(props: IconComponentProps) {
  return <Icon path={mdiArrowUpDownBold} {...props} />;
}

export { mdiArrowUpDownBold as path };
