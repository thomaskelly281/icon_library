import { mdiSmokeDetectorOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmokeDetectorOutline(props: IconComponentProps) {
  return <Icon path={mdiSmokeDetectorOutline} {...props} />;
}

export { mdiSmokeDetectorOutline as path };
