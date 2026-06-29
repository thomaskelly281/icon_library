import { mdiToggleSwitchOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToggleSwitchOff(props: IconComponentProps) {
  return <Icon path={mdiToggleSwitchOff} {...props} />;
}

export { mdiToggleSwitchOff as path };
