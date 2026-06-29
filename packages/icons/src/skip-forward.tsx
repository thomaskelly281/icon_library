import { mdiSkipForward } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkipForward(props: IconComponentProps) {
  return <Icon path={mdiSkipForward} {...props} />;
}

export { mdiSkipForward as path };
