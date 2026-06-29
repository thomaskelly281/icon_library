import { mdiHomeAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeAlertOutline} {...props} />;
}

export { mdiHomeAlertOutline as path };
