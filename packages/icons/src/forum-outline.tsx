import { mdiForumOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ForumOutline(props: IconComponentProps) {
  return <Icon path={mdiForumOutline} {...props} />;
}

export { mdiForumOutline as path };
