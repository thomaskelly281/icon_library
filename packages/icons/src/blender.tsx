import { mdiBlender } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Blender(props: IconComponentProps) {
  return <Icon path={mdiBlender} {...props} />;
}

export { mdiBlender as path };
