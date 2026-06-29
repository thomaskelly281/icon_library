import { mdiFileSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiFileSettingsOutline} {...props} />;
}

export { mdiFileSettingsOutline as path };
