import { mdiGolf } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Golf(props: IconComponentProps) {
  return <Icon path={mdiGolf} {...props} />;
}

export { mdiGolf as path };
