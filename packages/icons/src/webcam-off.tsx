import { mdiWebcamOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WebcamOff(props: IconComponentProps) {
  return <Icon path={mdiWebcamOff} {...props} />;
}

export { mdiWebcamOff as path };
