import { mdiMessageBookmarkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageBookmarkOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageBookmarkOutline} {...props} />;
}

export { mdiMessageBookmarkOutline as path };
