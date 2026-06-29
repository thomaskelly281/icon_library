import { mdiFileHidden } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileHidden(props: IconComponentProps) {
  return <Icon path={mdiFileHidden} {...props} />;
}

export { mdiFileHidden as path };
