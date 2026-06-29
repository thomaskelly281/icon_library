import { mdiTrashCan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrashCan(props: IconComponentProps) {
  return <Icon path={mdiTrashCan} {...props} />;
}

export { mdiTrashCan as path };
