import { mdiWindowShutterSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowShutterSettings(props: IconComponentProps) {
  return <Icon path={mdiWindowShutterSettings} {...props} />;
}

export { mdiWindowShutterSettings as path };
