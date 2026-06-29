import { mdiTableEyeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableEyeOff(props: IconComponentProps) {
  return <Icon path={mdiTableEyeOff} {...props} />;
}

export { mdiTableEyeOff as path };
