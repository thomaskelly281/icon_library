import { mdiWindowShutterCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowShutterCog(props: IconComponentProps) {
  return <Icon path={mdiWindowShutterCog} {...props} />;
}

export { mdiWindowShutterCog as path };
