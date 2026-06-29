import { mdiPacMan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PacMan(props: IconComponentProps) {
  return <Icon path={mdiPacMan} {...props} />;
}

export { mdiPacMan as path };
