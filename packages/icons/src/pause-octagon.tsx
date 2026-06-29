import { mdiPauseOctagon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PauseOctagon(props: IconComponentProps) {
  return <Icon path={mdiPauseOctagon} {...props} />;
}

export { mdiPauseOctagon as path };
