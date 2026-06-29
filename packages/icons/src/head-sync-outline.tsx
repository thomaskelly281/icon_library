import { mdiHeadSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiHeadSyncOutline} {...props} />;
}

export { mdiHeadSyncOutline as path };
