import { mdiHops } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hops(props: IconComponentProps) {
  return <Icon path={mdiHops} {...props} />;
}

export { mdiHops as path };
