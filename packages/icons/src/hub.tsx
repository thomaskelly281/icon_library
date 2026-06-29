import { mdiHub } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hub(props: IconComponentProps) {
  return <Icon path={mdiHub} {...props} />;
}

export { mdiHub as path };
