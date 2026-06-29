import { mdiArchiveRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveRemoveOutline} {...props} />;
}

export { mdiArchiveRemoveOutline as path };
