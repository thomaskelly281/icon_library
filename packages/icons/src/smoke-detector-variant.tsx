import { mdiSmokeDetectorVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmokeDetectorVariant(props: IconComponentProps) {
  return <Icon path={mdiSmokeDetectorVariant} {...props} />;
}

export { mdiSmokeDetectorVariant as path };
