import { mdiHandshake } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Handshake(props: IconComponentProps) {
  return <Icon path={mdiHandshake} {...props} />;
}

export { mdiHandshake as path };
