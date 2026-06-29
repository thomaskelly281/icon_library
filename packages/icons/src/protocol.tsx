import { mdiProtocol } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Protocol(props: IconComponentProps) {
  return <Icon path={mdiProtocol} {...props} />;
}

export { mdiProtocol as path };
