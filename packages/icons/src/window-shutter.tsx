import { mdiWindowShutter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowShutter(props: IconComponentProps) {
  return <Icon path={mdiWindowShutter} {...props} />;
}

export { mdiWindowShutter as path };
