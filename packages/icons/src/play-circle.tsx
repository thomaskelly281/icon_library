import { mdiPlayCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlayCircle(props: IconComponentProps) {
  return <Icon path={mdiPlayCircle} {...props} />;
}

export { mdiPlayCircle as path };
