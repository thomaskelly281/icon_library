import { mdiCookieMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieMinus(props: IconComponentProps) {
  return <Icon path={mdiCookieMinus} {...props} />;
}

export { mdiCookieMinus as path };
