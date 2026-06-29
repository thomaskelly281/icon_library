import { mdiForumPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ForumPlus(props: IconComponentProps) {
  return <Icon path={mdiForumPlus} {...props} />;
}

export { mdiForumPlus as path };
