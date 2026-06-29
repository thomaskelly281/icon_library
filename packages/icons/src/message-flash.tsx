import { mdiMessageFlash } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageFlash(props: IconComponentProps) {
  return <Icon path={mdiMessageFlash} {...props} />;
}

export { mdiMessageFlash as path };
