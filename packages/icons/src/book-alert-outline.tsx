import { mdiBookAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiBookAlertOutline} {...props} />;
}

export { mdiBookAlertOutline as path };
