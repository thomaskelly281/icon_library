import { mdiSmokeDetectorVariantAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmokeDetectorVariantAlert(props: IconComponentProps) {
  return <Icon path={mdiSmokeDetectorVariantAlert} {...props} />;
}

export { mdiSmokeDetectorVariantAlert as path };
