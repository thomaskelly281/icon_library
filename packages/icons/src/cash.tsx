import { mdiCash } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cash(props: IconComponentProps) {
  return <Icon path={mdiCash} {...props} />;
}

export { mdiCash as path };
