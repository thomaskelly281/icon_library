import { mdiTrackpad } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Trackpad(props: IconComponentProps) {
  return <Icon path={mdiTrackpad} {...props} />;
}

export { mdiTrackpad as path };
