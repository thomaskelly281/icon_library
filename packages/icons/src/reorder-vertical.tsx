import { mdiReorderVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReorderVertical(props: IconComponentProps) {
  return <Icon path={mdiReorderVertical} {...props} />;
}

export { mdiReorderVertical as path };
