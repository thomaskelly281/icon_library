import { mdiSharkFin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SharkFin(props: IconComponentProps) {
  return <Icon path={mdiSharkFin} {...props} />;
}

export { mdiSharkFin as path };
