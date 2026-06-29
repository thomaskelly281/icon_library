import { mdiPencilBoxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilBoxMultiple(props: IconComponentProps) {
  return <Icon path={mdiPencilBoxMultiple} {...props} />;
}

export { mdiPencilBoxMultiple as path };
