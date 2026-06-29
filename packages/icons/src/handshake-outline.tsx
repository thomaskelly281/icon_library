import { mdiHandshakeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandshakeOutline(props: IconComponentProps) {
  return <Icon path={mdiHandshakeOutline} {...props} />;
}

export { mdiHandshakeOutline as path };
