import { mdiVanPassenger } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VanPassenger(props: IconComponentProps) {
  return <Icon path={mdiVanPassenger} {...props} />;
}

export { mdiVanPassenger as path };
