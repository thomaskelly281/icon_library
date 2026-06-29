import { mdiCookieMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiCookieMinusOutline} {...props} />;
}

export { mdiCookieMinusOutline as path };
