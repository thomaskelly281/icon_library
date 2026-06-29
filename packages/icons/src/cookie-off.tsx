import { mdiCookieOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieOff(props: IconComponentProps) {
  return <Icon path={mdiCookieOff} {...props} />;
}

export { mdiCookieOff as path };
