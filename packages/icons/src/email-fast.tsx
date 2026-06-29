import { mdiEmailFast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailFast(props: IconComponentProps) {
  return <Icon path={mdiEmailFast} {...props} />;
}

export { mdiEmailFast as path };
