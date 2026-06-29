import { mdiPenRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PenRemove(props: IconComponentProps) {
  return <Icon path={mdiPenRemove} {...props} />;
}

export { mdiPenRemove as path };
