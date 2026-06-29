import { mdiGnome } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gnome(props: IconComponentProps) {
  return <Icon path={mdiGnome} {...props} />;
}

export { mdiGnome as path };
