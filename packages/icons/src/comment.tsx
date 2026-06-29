import { mdiComment } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Comment(props: IconComponentProps) {
  return <Icon path={mdiComment} {...props} />;
}

export { mdiComment as path };
