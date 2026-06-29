import { mdiVectorPolylinePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorPolylinePlus(props: IconComponentProps) {
  return <Icon path={mdiVectorPolylinePlus} {...props} />;
}

export { mdiVectorPolylinePlus as path };
