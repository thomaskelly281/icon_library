import { mdiLightbulbOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbOutline(props: IconComponentProps) {
  return <Icon path={mdiLightbulbOutline} {...props} />;
}

export { mdiLightbulbOutline as path };
