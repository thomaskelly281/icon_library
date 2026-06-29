import { mdiForumRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ForumRemove(props: IconComponentProps) {
  return <Icon path={mdiForumRemove} {...props} />;
}

export { mdiForumRemove as path };
