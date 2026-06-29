import { mdiCookieLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieLockOutline(props: IconComponentProps) {
  return <Icon path={mdiCookieLockOutline} {...props} />;
}

export { mdiCookieLockOutline as path };
