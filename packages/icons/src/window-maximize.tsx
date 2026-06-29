import { mdiWindowMaximize } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowMaximize(props: IconComponentProps) {
  return <Icon path={mdiWindowMaximize} {...props} />;
}

export { mdiWindowMaximize as path };
