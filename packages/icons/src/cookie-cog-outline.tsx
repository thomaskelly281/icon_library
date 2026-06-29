import { mdiCookieCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieCogOutline(props: IconComponentProps) {
  return <Icon path={mdiCookieCogOutline} {...props} />;
}

export { mdiCookieCogOutline as path };
