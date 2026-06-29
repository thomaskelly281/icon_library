import { mdiCookieLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieLock(props: IconComponentProps) {
  return <Icon path={mdiCookieLock} {...props} />;
}

export { mdiCookieLock as path };
