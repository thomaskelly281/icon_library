import { mdiVideo3d } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Video3d(props: IconComponentProps) {
  return <Icon path={mdiVideo3d} {...props} />;
}

export { mdiVideo3d as path };
