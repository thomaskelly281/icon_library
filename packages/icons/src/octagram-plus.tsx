import { mdiOctagramPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OctagramPlus(props: IconComponentProps) {
  return <Icon path={mdiOctagramPlus} {...props} />;
}

export { mdiOctagramPlus as path };
