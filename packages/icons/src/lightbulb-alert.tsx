import { mdiLightbulbAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbAlert(props: IconComponentProps) {
  return <Icon path={mdiLightbulbAlert} {...props} />;
}

export { mdiLightbulbAlert as path };
