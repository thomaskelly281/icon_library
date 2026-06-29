import { mdiPistol } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pistol(props: IconComponentProps) {
  return <Icon path={mdiPistol} {...props} />;
}

export { mdiPistol as path };
