import { mdiNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Network(props: IconComponentProps) {
  return <Icon path={mdiNetwork} {...props} />;
}

export { mdiNetwork as path };
