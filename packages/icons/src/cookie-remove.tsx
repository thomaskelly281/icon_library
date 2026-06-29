import { mdiCookieRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieRemove(props: IconComponentProps) {
  return <Icon path={mdiCookieRemove} {...props} />;
}

export { mdiCookieRemove as path };
