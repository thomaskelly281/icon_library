import { mdiVideo2d } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Video2d(props: IconComponentProps) {
  return <Icon path={mdiVideo2d} {...props} />;
}

export { mdiVideo2d as path };
