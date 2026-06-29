import { mdiPause } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pause(props: IconComponentProps) {
  return <Icon path={mdiPause} {...props} />;
}

export { mdiPause as path };
