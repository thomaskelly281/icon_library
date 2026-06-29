import { mdiCastOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CastOff(props: IconComponentProps) {
  return <Icon path={mdiCastOff} {...props} />;
}

export { mdiCastOff as path };
