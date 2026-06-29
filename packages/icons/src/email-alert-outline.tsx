import { mdiEmailAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailAlertOutline} {...props} />;
}

export { mdiEmailAlertOutline as path };
