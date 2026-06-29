import { mdiCookieRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiCookieRefreshOutline} {...props} />;
}

export { mdiCookieRefreshOutline as path };
