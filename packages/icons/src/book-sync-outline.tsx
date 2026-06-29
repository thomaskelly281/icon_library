import { mdiBookSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiBookSyncOutline} {...props} />;
}

export { mdiBookSyncOutline as path };
