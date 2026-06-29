import { mdiWindowMinimize } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowMinimize(props: IconComponentProps) {
  return <Icon path={mdiWindowMinimize} {...props} />;
}

export { mdiWindowMinimize as path };
