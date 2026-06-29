import { mdiLink } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Link(props: IconComponentProps) {
  return <Icon path={mdiLink} {...props} />;
}

export { mdiLink as path };
