import { mdiCookieOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieOutline(props: IconComponentProps) {
  return <Icon path={mdiCookieOutline} {...props} />;
}

export { mdiCookieOutline as path };
