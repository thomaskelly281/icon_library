import { mdiAlien } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Alien(props: IconComponentProps) {
  return <Icon path={mdiAlien} {...props} />;
}

export { mdiAlien as path };
