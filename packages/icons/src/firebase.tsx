import { mdiFirebase } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Firebase(props: IconComponentProps) {
  return <Icon path={mdiFirebase} {...props} />;
}

export { mdiFirebase as path };
