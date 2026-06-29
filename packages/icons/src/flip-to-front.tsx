import { mdiFlipToFront } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlipToFront(props: IconComponentProps) {
  return <Icon path={mdiFlipToFront} {...props} />;
}

export { mdiFlipToFront as path };
