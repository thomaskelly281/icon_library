import { mdiCubeUnfolded } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CubeUnfolded(props: IconComponentProps) {
  return <Icon path={mdiCubeUnfolded} {...props} />;
}

export { mdiCubeUnfolded as path };
