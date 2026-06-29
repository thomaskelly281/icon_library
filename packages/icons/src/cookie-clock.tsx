import { mdiCookieClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieClock(props: IconComponentProps) {
  return <Icon path={mdiCookieClock} {...props} />;
}

export { mdiCookieClock as path };
