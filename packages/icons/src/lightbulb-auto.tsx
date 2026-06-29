import { mdiLightbulbAuto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbAuto(props: IconComponentProps) {
  return <Icon path={mdiLightbulbAuto} {...props} />;
}

export { mdiLightbulbAuto as path };
