import { mdiDebian } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Debian(props: IconComponentProps) {
  return <Icon path={mdiDebian} {...props} />;
}

export { mdiDebian as path };
