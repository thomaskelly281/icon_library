import { mdiEmailRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailRemove(props: IconComponentProps) {
  return <Icon path={mdiEmailRemove} {...props} />;
}

export { mdiEmailRemove as path };
