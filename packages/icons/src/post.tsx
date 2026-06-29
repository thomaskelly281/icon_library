import { mdiPost } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Post(props: IconComponentProps) {
  return <Icon path={mdiPost} {...props} />;
}

export { mdiPost as path };
