import { mdiForumRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ForumRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiForumRemoveOutline} {...props} />;
}

export { mdiForumRemoveOutline as path };
