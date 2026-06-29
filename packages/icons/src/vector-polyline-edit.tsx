import { mdiVectorPolylineEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorPolylineEdit(props: IconComponentProps) {
  return <Icon path={mdiVectorPolylineEdit} {...props} />;
}

export { mdiVectorPolylineEdit as path };
