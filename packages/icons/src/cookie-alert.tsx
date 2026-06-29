import { mdiCookieAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieAlert(props: IconComponentProps) {
  return <Icon path={mdiCookieAlert} {...props} />;
}

export { mdiCookieAlert as path };
