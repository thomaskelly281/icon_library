import { mdiApplicationSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiApplicationSettingsOutline} {...props} />;
}

export { mdiApplicationSettingsOutline as path };
