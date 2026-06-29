import { mdiWindowRestore } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowRestore(props: IconComponentProps) {
  return <Icon path={mdiWindowRestore} {...props} />;
}

export { mdiWindowRestore as path };
