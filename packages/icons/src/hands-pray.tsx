import { mdiHandsPray } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandsPray(props: IconComponentProps) {
  return <Icon path={mdiHandsPray} {...props} />;
}

export { mdiHandsPray as path };
