import { mdiSpade } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Spade(props: IconComponentProps) {
  return <Icon path={mdiSpade} {...props} />;
}

export { mdiSpade as path };
