import { mdiWindowShutterAuto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowShutterAuto(props: IconComponentProps) {
  return <Icon path={mdiWindowShutterAuto} {...props} />;
}

export { mdiWindowShutterAuto as path };
