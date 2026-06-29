import { mdiForumPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ForumPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiForumPlusOutline} {...props} />;
}

export { mdiForumPlusOutline as path };
