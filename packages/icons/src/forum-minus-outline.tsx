import { mdiForumMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ForumMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiForumMinusOutline} {...props} />;
}

export { mdiForumMinusOutline as path };
