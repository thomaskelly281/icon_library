import { mdiCookiePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookiePlus(props: IconComponentProps) {
  return <Icon path={mdiCookiePlus} {...props} />;
}

export { mdiCookiePlus as path };
