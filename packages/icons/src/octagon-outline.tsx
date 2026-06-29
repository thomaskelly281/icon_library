import { mdiOctagonOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OctagonOutline(props: IconComponentProps) {
  return <Icon path={mdiOctagonOutline} {...props} />;
}

export { mdiOctagonOutline as path };
