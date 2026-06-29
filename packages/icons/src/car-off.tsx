import { mdiCarOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarOff(props: IconComponentProps) {
  return <Icon path={mdiCarOff} {...props} />;
}

export { mdiCarOff as path };
