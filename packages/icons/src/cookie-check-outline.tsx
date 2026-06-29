import { mdiCookieCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiCookieCheckOutline} {...props} />;
}

export { mdiCookieCheckOutline as path };
