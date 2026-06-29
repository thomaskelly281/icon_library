import { mdiCabinAFrame } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CabinAFrame(props: IconComponentProps) {
  return <Icon path={mdiCabinAFrame} {...props} />;
}

export { mdiCabinAFrame as path };
