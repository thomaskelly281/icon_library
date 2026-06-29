import { mdiArchiveLockOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveLockOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveLockOpenOutline} {...props} />;
}

export { mdiArchiveLockOpenOutline as path };
