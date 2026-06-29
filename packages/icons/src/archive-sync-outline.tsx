import { mdiArchiveSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveSyncOutline} {...props} />;
}

export { mdiArchiveSyncOutline as path };
