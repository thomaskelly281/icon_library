import { mdiGoKartTrack } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoKartTrack(props: IconComponentProps) {
  return <Icon path={mdiGoKartTrack} {...props} />;
}

export { mdiGoKartTrack as path };
