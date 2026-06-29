import { mdiFileAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiFileAlertOutline} {...props} />;
}

export { mdiFileAlertOutline as path };
