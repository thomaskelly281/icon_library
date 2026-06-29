import { mdiHandPointingRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandPointingRight(props: IconComponentProps) {
  return <Icon path={mdiHandPointingRight} {...props} />;
}

export { mdiHandPointingRight as path };
