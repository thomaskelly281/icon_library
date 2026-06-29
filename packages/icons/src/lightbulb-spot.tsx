import { mdiLightbulbSpot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbSpot(props: IconComponentProps) {
  return <Icon path={mdiLightbulbSpot} {...props} />;
}

export { mdiLightbulbSpot as path };
