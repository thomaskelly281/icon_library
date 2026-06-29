import { mdiJabber } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Jabber(props: IconComponentProps) {
  return <Icon path={mdiJabber} {...props} />;
}

export { mdiJabber as path };
