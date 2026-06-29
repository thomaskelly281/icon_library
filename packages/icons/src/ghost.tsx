import { mdiGhost } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ghost(props: IconComponentProps) {
  return <Icon path={mdiGhost} {...props} />;
}

export { mdiGhost as path };
