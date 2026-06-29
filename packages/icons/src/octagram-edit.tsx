import { mdiOctagramEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OctagramEdit(props: IconComponentProps) {
  return <Icon path={mdiOctagramEdit} {...props} />;
}

export { mdiOctagramEdit as path };
