import { mdiEject } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Eject(props: IconComponentProps) {
  return <Icon path={mdiEject} {...props} />;
}

export { mdiEject as path };
