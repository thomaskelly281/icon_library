import { mdiCookieSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieSettings(props: IconComponentProps) {
  return <Icon path={mdiCookieSettings} {...props} />;
}

export { mdiCookieSettings as path };
