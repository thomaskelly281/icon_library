import { mdiHandClap } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandClap(props: IconComponentProps) {
  return <Icon path={mdiHandClap} {...props} />;
}

export { mdiHandClap as path };
