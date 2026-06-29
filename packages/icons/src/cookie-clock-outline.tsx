import { mdiCookieClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieClockOutline(props: IconComponentProps) {
  return <Icon path={mdiCookieClockOutline} {...props} />;
}

export { mdiCookieClockOutline as path };
