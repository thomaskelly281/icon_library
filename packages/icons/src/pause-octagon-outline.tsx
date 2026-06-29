import { mdiPauseOctagonOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PauseOctagonOutline(props: IconComponentProps) {
  return <Icon path={mdiPauseOctagonOutline} {...props} />;
}

export { mdiPauseOctagonOutline as path };
