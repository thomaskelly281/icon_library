import { mdiArchiveSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveSettingsOutline} {...props} />;
}

export { mdiArchiveSettingsOutline as path };
