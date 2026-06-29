import { mdiBookMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookMultiple(props: IconComponentProps) {
  return <Icon path={mdiBookMultiple} {...props} />;
}

export { mdiBookMultiple as path };
