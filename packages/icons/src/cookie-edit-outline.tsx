import { mdiCookieEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieEditOutline(props: IconComponentProps) {
  return <Icon path={mdiCookieEditOutline} {...props} />;
}

export { mdiCookieEditOutline as path };
