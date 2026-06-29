import { mdiCookie } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cookie(props: IconComponentProps) {
  return <Icon path={mdiCookie} {...props} />;
}

export { mdiCookie as path };
