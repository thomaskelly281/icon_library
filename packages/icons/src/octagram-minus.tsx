import { mdiOctagramMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OctagramMinus(props: IconComponentProps) {
  return <Icon path={mdiOctagramMinus} {...props} />;
}

export { mdiOctagramMinus as path };
