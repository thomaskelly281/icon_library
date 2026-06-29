import { mdiPlusThick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusThick(props: IconComponentProps) {
  return <Icon path={mdiPlusThick} {...props} />;
}

export { mdiPlusThick as path };
