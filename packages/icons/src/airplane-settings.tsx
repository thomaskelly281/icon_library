import { mdiAirplaneSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplaneSettings(props: IconComponentProps) {
  return <Icon path={mdiAirplaneSettings} {...props} />;
}

export { mdiAirplaneSettings as path };
