import { mdiLightSwitch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightSwitch(props: IconComponentProps) {
  return <Icon path={mdiLightSwitch} {...props} />;
}

export { mdiLightSwitch as path };
