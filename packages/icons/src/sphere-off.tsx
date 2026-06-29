import { mdiSphereOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SphereOff(props: IconComponentProps) {
  return <Icon path={mdiSphereOff} {...props} />;
}

export { mdiSphereOff as path };
