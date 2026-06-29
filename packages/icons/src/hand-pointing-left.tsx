import { mdiHandPointingLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandPointingLeft(props: IconComponentProps) {
  return <Icon path={mdiHandPointingLeft} {...props} />;
}

export { mdiHandPointingLeft as path };
