import { mdiFileSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiFileSyncOutline} {...props} />;
}

export { mdiFileSyncOutline as path };
