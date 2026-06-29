import { mdiTramSide } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TramSide(props: IconComponentProps) {
  return <Icon path={mdiTramSide} {...props} />;
}

export { mdiTramSide as path };
