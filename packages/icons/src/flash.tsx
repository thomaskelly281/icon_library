import { mdiFlash } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Flash(props: IconComponentProps) {
  return <Icon path={mdiFlash} {...props} />;
}

export { mdiFlash as path };
