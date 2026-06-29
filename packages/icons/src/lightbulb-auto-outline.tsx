import { mdiLightbulbAutoOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbAutoOutline(props: IconComponentProps) {
  return <Icon path={mdiLightbulbAutoOutline} {...props} />;
}

export { mdiLightbulbAutoOutline as path };
