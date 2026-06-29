import { mdiServerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ServerOff(props: IconComponentProps) {
  return <Icon path={mdiServerOff} {...props} />;
}

export { mdiServerOff as path };
