import { mdiHandClapOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandClapOff(props: IconComponentProps) {
  return <Icon path={mdiHandClapOff} {...props} />;
}

export { mdiHandClapOff as path };
