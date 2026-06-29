import { mdiCookieEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieEdit(props: IconComponentProps) {
  return <Icon path={mdiCookieEdit} {...props} />;
}

export { mdiCookieEdit as path };
