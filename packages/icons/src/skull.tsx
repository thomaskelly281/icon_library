import { mdiSkull } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Skull(props: IconComponentProps) {
  return <Icon path={mdiSkull} {...props} />;
}

export { mdiSkull as path };
