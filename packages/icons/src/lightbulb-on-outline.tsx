import { mdiLightbulbOnOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbOnOutline(props: IconComponentProps) {
  return <Icon path={mdiLightbulbOnOutline} {...props} />;
}

export { mdiLightbulbOnOutline as path };
