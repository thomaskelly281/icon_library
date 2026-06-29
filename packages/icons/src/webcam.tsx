import { mdiWebcam } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Webcam(props: IconComponentProps) {
  return <Icon path={mdiWebcam} {...props} />;
}

export { mdiWebcam as path };
