import { mdiTildeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TildeOff(props: IconComponentProps) {
  return <Icon path={mdiTildeOff} {...props} />;
}

export { mdiTildeOff as path };
