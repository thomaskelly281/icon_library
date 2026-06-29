import { mdiThumbUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThumbUp(props: IconComponentProps) {
  return <Icon path={mdiThumbUp} {...props} />;
}

export { mdiThumbUp as path };
