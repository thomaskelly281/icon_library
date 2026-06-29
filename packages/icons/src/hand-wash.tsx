import { mdiHandWash } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandWash(props: IconComponentProps) {
  return <Icon path={mdiHandWash} {...props} />;
}

export { mdiHandWash as path };
