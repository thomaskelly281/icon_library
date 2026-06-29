import { mdiBookPlusMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookPlusMultiple(props: IconComponentProps) {
  return <Icon path={mdiBookPlusMultiple} {...props} />;
}

export { mdiBookPlusMultiple as path };
