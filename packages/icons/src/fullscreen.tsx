import { mdiFullscreen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fullscreen(props: IconComponentProps) {
  return <Icon path={mdiFullscreen} {...props} />;
}

export { mdiFullscreen as path };
