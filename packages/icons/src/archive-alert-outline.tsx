import { mdiArchiveAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveAlertOutline} {...props} />;
}

export { mdiArchiveAlertOutline as path };
