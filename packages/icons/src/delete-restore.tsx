import { mdiDeleteRestore } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteRestore(props: IconComponentProps) {
  return <Icon path={mdiDeleteRestore} {...props} />;
}

export { mdiDeleteRestore as path };
