import { mdiStarSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiStarSettingsOutline} {...props} />;
}

export { mdiStarSettingsOutline as path };
