import { mdiNumeric9PlusCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric9PlusCircle(props: IconComponentProps) {
  return <Icon path={mdiNumeric9PlusCircle} {...props} />;
}

export { mdiNumeric9PlusCircle as path };
