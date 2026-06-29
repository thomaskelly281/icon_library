import { mdiPenPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PenPlus(props: IconComponentProps) {
  return <Icon path={mdiPenPlus} {...props} />;
}

export { mdiPenPlus as path };
