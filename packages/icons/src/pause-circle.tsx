import { mdiPauseCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PauseCircle(props: IconComponentProps) {
  return <Icon path={mdiPauseCircle} {...props} />;
}

export { mdiPauseCircle as path };
