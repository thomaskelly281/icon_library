import { mdiWindowClosed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowClosed(props: IconComponentProps) {
  return <Icon path={mdiWindowClosed} {...props} />;
}

export { mdiWindowClosed as path };
