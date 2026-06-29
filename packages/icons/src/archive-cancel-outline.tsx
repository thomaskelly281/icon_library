import { mdiArchiveCancelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveCancelOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveCancelOutline} {...props} />;
}

export { mdiArchiveCancelOutline as path };
