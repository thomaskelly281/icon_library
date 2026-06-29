import { mdiCookieRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieRefresh(props: IconComponentProps) {
  return <Icon path={mdiCookieRefresh} {...props} />;
}

export { mdiCookieRefresh as path };
