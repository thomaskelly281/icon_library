import { mdiFileRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileRemove(props: IconComponentProps) {
  return <Icon path={mdiFileRemove} {...props} />;
}

export { mdiFileRemove as path };
