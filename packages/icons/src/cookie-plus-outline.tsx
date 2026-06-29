import { mdiCookiePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookiePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiCookiePlusOutline} {...props} />;
}

export { mdiCookiePlusOutline as path };
