import { mdiLightbulbSpotOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbSpotOff(props: IconComponentProps) {
  return <Icon path={mdiLightbulbSpotOff} {...props} />;
}

export { mdiLightbulbSpotOff as path };
