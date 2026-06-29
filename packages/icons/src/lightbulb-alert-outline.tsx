import { mdiLightbulbAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiLightbulbAlertOutline} {...props} />;
}

export { mdiLightbulbAlertOutline as path };
