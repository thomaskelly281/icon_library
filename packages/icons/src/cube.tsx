import { mdiCube } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cube(props: IconComponentProps) {
  return <Icon path={mdiCube} {...props} />;
}

export { mdiCube as path };
