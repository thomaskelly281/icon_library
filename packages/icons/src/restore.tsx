import { mdiRestore } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Restore(props: IconComponentProps) {
  return <Icon path={mdiRestore} {...props} />;
}

export { mdiRestore as path };
