import { mdiOctahedron } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Octahedron(props: IconComponentProps) {
  return <Icon path={mdiOctahedron} {...props} />;
}

export { mdiOctahedron as path };
