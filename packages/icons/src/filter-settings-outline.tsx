import { mdiFilterSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiFilterSettingsOutline} {...props} />;
}

export { mdiFilterSettingsOutline as path };
