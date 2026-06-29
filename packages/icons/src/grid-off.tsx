import { mdiGridOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GridOff(props: IconComponentProps) {
  return <Icon path={mdiGridOff} {...props} />;
}

export { mdiGridOff as path };
