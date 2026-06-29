import { mdiMessageSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageSettingsOutline} {...props} />;
}

export { mdiMessageSettingsOutline as path };
