import { mdiNumeric9PlusBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric9PlusBox(props: IconComponentProps) {
  return <Icon path={mdiNumeric9PlusBox} {...props} />;
}

export { mdiNumeric9PlusBox as path };
