import { mdiTableKey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableKey(props: IconComponentProps) {
  return <Icon path={mdiTableKey} {...props} />;
}

export { mdiTableKey as path };
