import { mdiCookieRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiCookieRemoveOutline} {...props} />;
}

export { mdiCookieRemoveOutline as path };
