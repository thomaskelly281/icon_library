import { mdiCash100 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cash100(props: IconComponentProps) {
  return <Icon path={mdiCash100} {...props} />;
}

export { mdiCash100 as path };
