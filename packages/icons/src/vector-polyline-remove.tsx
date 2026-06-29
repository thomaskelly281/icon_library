import { mdiVectorPolylineRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorPolylineRemove(props: IconComponentProps) {
  return <Icon path={mdiVectorPolylineRemove} {...props} />;
}

export { mdiVectorPolylineRemove as path };
