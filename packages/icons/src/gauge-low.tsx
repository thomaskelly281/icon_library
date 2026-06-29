import { mdiGaugeLow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GaugeLow(props: IconComponentProps) {
  return <Icon path={mdiGaugeLow} {...props} />;
}

export { mdiGaugeLow as path };
