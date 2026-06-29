import { mdiSkipNextCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkipNextCircle(props: IconComponentProps) {
  return <Icon path={mdiSkipNextCircle} {...props} />;
}

export { mdiSkipNextCircle as path };
