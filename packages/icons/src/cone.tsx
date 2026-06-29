import { mdiCone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cone(props: IconComponentProps) {
  return <Icon path={mdiCone} {...props} />;
}

export { mdiCone as path };
