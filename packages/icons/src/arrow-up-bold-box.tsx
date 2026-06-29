import { mdiArrowUpBoldBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpBoldBox(props: IconComponentProps) {
  return <Icon path={mdiArrowUpBoldBox} {...props} />;
}

export { mdiArrowUpBoldBox as path };
