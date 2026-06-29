import { mdiForumMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ForumMinus(props: IconComponentProps) {
  return <Icon path={mdiForumMinus} {...props} />;
}

export { mdiForumMinus as path };
