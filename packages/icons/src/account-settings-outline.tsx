import { mdiAccountSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountSettingsOutline} {...props} />;
}

export { mdiAccountSettingsOutline as path };
