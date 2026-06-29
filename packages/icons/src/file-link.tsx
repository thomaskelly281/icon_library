import { mdiFileLink } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileLink(props: IconComponentProps) {
  return <Icon path={mdiFileLink} {...props} />;
}

export { mdiFileLink as path };
