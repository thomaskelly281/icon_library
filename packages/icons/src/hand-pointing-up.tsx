import { mdiHandPointingUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandPointingUp(props: IconComponentProps) {
  return <Icon path={mdiHandPointingUp} {...props} />;
}

export { mdiHandPointingUp as path };
