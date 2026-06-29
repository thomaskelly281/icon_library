import { mdiFireOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FireOff(props: IconComponentProps) {
  return <Icon path={mdiFireOff} {...props} />;
}

export { mdiFireOff as path };
