import { mdiSpray } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Spray(props: IconComponentProps) {
  return <Icon path={mdiSpray} {...props} />;
}

export { mdiSpray as path };
