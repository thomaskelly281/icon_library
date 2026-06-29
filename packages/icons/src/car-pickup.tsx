import { mdiCarPickup } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarPickup(props: IconComponentProps) {
  return <Icon path={mdiCarPickup} {...props} />;
}

export { mdiCarPickup as path };
