import { mdiLightSwitchOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightSwitchOff(props: IconComponentProps) {
  return <Icon path={mdiLightSwitchOff} {...props} />;
}

export { mdiLightSwitchOff as path };
