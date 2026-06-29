import { mdiChiliAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChiliAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiChiliAlertOutline} {...props} />;
}

export { mdiChiliAlertOutline as path };
