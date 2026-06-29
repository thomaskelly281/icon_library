import { mdiVectorPolylineMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorPolylineMinus(props: IconComponentProps) {
  return <Icon path={mdiVectorPolylineMinus} {...props} />;
}

export { mdiVectorPolylineMinus as path };
