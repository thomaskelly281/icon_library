import { mdiPailOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PailOff(props: IconComponentProps) {
  return <Icon path={mdiPailOff} {...props} />;
}

export { mdiPailOff as path };
