import { mdiKeyLink } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyLink(props: IconComponentProps) {
  return <Icon path={mdiKeyLink} {...props} />;
}

export { mdiKeyLink as path };
