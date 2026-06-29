import { mdiPlusCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusCircle(props: IconComponentProps) {
  return <Icon path={mdiPlusCircle} {...props} />;
}

export { mdiPlusCircle as path };
