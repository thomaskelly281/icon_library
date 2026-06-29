import { mdiBeach } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Beach(props: IconComponentProps) {
  return <Icon path={mdiBeach} {...props} />;
}

export { mdiBeach as path };
