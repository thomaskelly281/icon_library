import { mdiLightbulbNight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbNight(props: IconComponentProps) {
  return <Icon path={mdiLightbulbNight} {...props} />;
}

export { mdiLightbulbNight as path };
