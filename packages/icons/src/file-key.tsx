import { mdiFileKey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileKey(props: IconComponentProps) {
  return <Icon path={mdiFileKey} {...props} />;
}

export { mdiFileKey as path };
