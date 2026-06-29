import { mdiWebrtc } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Webrtc(props: IconComponentProps) {
  return <Icon path={mdiWebrtc} {...props} />;
}

export { mdiWebrtc as path };
