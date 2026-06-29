import { mdiAlertOctagonOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertOctagonOutline(props: IconComponentProps) {
  return <Icon path={mdiAlertOctagonOutline} {...props} />;
}

export { mdiAlertOctagonOutline as path };
