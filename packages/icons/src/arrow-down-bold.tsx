import { mdiArrowDownBold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDownBold(props: IconComponentProps) {
  return <Icon path={mdiArrowDownBold} {...props} />;
}

export { mdiArrowDownBold as path };
