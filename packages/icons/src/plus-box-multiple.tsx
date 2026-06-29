import { mdiPlusBoxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusBoxMultiple(props: IconComponentProps) {
  return <Icon path={mdiPlusBoxMultiple} {...props} />;
}

export { mdiPlusBoxMultiple as path };
