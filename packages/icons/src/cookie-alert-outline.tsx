import { mdiCookieAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiCookieAlertOutline} {...props} />;
}

export { mdiCookieAlertOutline as path };
