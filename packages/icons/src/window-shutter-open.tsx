import { mdiWindowShutterOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowShutterOpen(props: IconComponentProps) {
  return <Icon path={mdiWindowShutterOpen} {...props} />;
}

export { mdiWindowShutterOpen as path };
