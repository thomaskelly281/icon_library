import { mdiSimAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SimAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiSimAlertOutline} {...props} />;
}

export { mdiSimAlertOutline as path };
