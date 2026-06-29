import { mdiEggOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EggOff(props: IconComponentProps) {
  return <Icon path={mdiEggOff} {...props} />;
}

export { mdiEggOff as path };
