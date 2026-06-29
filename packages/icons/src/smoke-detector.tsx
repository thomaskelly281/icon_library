import { mdiSmokeDetector } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmokeDetector(props: IconComponentProps) {
  return <Icon path={mdiSmokeDetector} {...props} />;
}

export { mdiSmokeDetector as path };
