import { mdiMessageAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageAlertOutline} {...props} />;
}

export { mdiMessageAlertOutline as path };
