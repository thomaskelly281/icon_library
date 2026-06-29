import { mdiReorderHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReorderHorizontal(props: IconComponentProps) {
  return <Icon path={mdiReorderHorizontal} {...props} />;
}

export { mdiReorderHorizontal as path };
