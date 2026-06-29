import { mdiCookieSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiCookieSettingsOutline} {...props} />;
}

export { mdiCookieSettingsOutline as path };
