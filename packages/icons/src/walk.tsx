import { mdiWalk } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Walk(props: IconComponentProps) {
  return <Icon path={mdiWalk} {...props} />;
}

export { mdiWalk as path };
