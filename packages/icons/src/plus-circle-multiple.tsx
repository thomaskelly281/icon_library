import { mdiPlusCircleMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusCircleMultiple(props: IconComponentProps) {
  return <Icon path={mdiPlusCircleMultiple} {...props} />;
}

export { mdiPlusCircleMultiple as path };
