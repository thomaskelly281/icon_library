import { mdiCookieOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieOffOutline(props: IconComponentProps) {
  return <Icon path={mdiCookieOffOutline} {...props} />;
}

export { mdiCookieOffOutline as path };
