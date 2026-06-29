import { mdiHandPointingDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandPointingDown(props: IconComponentProps) {
  return <Icon path={mdiHandPointingDown} {...props} />;
}

export { mdiHandPointingDown as path };
