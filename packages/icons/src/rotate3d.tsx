import { mdiRotate3d } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rotate3d(props: IconComponentProps) {
  return <Icon path={mdiRotate3d} {...props} />;
}

export { mdiRotate3d as path };
