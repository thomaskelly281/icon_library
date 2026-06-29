import { mdiWindowOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowOpen(props: IconComponentProps) {
  return <Icon path={mdiWindowOpen} {...props} />;
}

export { mdiWindowOpen as path };
