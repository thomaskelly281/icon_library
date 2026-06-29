import { mdiCubeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CubeOff(props: IconComponentProps) {
  return <Icon path={mdiCubeOff} {...props} />;
}

export { mdiCubeOff as path };
