import { mdiApiOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApiOff(props: IconComponentProps) {
  return <Icon path={mdiApiOff} {...props} />;
}

export { mdiApiOff as path };
