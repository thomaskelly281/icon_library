import { mdiArchive } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Archive(props: IconComponentProps) {
  return <Icon path={mdiArchive} {...props} />;
}

export { mdiArchive as path };
