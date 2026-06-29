import { mdiLightbulbOn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbOn(props: IconComponentProps) {
  return <Icon path={mdiLightbulbOn} {...props} />;
}

export { mdiLightbulbOn as path };
