import { mdiAlertMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiAlertMinusOutline} {...props} />;
}

export { mdiAlertMinusOutline as path };
