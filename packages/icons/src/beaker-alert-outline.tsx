import { mdiBeakerAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeakerAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiBeakerAlertOutline} {...props} />;
}

export { mdiBeakerAlertOutline as path };
