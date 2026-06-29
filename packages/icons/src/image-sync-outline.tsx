import { mdiImageSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiImageSyncOutline} {...props} />;
}

export { mdiImageSyncOutline as path };
