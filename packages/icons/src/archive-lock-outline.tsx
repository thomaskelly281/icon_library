import { mdiArchiveLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveLockOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveLockOutline} {...props} />;
}

export { mdiArchiveLockOutline as path };
