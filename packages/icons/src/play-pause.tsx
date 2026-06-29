import { mdiPlayPause } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlayPause(props: IconComponentProps) {
  return <Icon path={mdiPlayPause} {...props} />;
}

export { mdiPlayPause as path };
