import { mdiPineTreeFire } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PineTreeFire(props: IconComponentProps) {
  return <Icon path={mdiPineTreeFire} {...props} />;
}

export { mdiPineTreeFire as path };
