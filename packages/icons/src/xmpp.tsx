import { mdiXmpp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Xmpp(props: IconComponentProps) {
  return <Icon path={mdiXmpp} {...props} />;
}

export { mdiXmpp as path };
