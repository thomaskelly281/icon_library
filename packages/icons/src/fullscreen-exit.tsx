import { mdiFullscreenExit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FullscreenExit(props: IconComponentProps) {
  return <Icon path={mdiFullscreenExit} {...props} />;
}

export { mdiFullscreenExit as path };
