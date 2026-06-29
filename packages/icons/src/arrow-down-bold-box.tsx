import { mdiArrowDownBoldBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDownBoldBox(props: IconComponentProps) {
  return <Icon path={mdiArrowDownBoldBox} {...props} />;
}

export { mdiArrowDownBoldBox as path };
