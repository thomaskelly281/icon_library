import { mdiBellAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiBellAlertOutline} {...props} />;
}

export { mdiBellAlertOutline as path };
