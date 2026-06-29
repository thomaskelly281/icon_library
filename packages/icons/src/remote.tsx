import { mdiRemote } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Remote(props: IconComponentProps) {
  return <Icon path={mdiRemote} {...props} />;
}

export { mdiRemote as path };
