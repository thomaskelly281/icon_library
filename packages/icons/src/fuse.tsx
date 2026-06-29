import { mdiFuse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fuse(props: IconComponentProps) {
  return <Icon path={mdiFuse} {...props} />;
}

export { mdiFuse as path };
