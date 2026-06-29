import { mdiConeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ConeOff(props: IconComponentProps) {
  return <Icon path={mdiConeOff} {...props} />;
}

export { mdiConeOff as path };
