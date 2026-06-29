import { mdiSmokeDetectorAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmokeDetectorAlert(props: IconComponentProps) {
  return <Icon path={mdiSmokeDetectorAlert} {...props} />;
}

export { mdiSmokeDetectorAlert as path };
