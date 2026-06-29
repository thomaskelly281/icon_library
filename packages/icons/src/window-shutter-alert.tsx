import { mdiWindowShutterAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowShutterAlert(props: IconComponentProps) {
  return <Icon path={mdiWindowShutterAlert} {...props} />;
}

export { mdiWindowShutterAlert as path };
