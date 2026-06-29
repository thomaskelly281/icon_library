import { mdiBookSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiBookSettingsOutline} {...props} />;
}

export { mdiBookSettingsOutline as path };
