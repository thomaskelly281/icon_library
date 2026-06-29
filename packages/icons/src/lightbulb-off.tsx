import { mdiLightbulbOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbOff(props: IconComponentProps) {
  return <Icon path={mdiLightbulbOff} {...props} />;
}

export { mdiLightbulbOff as path };
