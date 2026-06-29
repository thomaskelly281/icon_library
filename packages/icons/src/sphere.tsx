import { mdiSphere } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sphere(props: IconComponentProps) {
  return <Icon path={mdiSphere} {...props} />;
}

export { mdiSphere as path };
