import { mdiCookieCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieCheck(props: IconComponentProps) {
  return <Icon path={mdiCookieCheck} {...props} />;
}

export { mdiCookieCheck as path };
