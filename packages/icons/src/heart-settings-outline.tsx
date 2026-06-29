import { mdiHeartSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiHeartSettingsOutline} {...props} />;
}

export { mdiHeartSettingsOutline as path };
