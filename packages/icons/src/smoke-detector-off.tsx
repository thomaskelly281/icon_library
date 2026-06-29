import { mdiSmokeDetectorOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmokeDetectorOff(props: IconComponentProps) {
  return <Icon path={mdiSmokeDetectorOff} {...props} />;
}

export { mdiSmokeDetectorOff as path };
