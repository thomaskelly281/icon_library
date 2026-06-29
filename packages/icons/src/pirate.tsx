import { mdiPirate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pirate(props: IconComponentProps) {
  return <Icon path={mdiPirate} {...props} />;
}

export { mdiPirate as path };
