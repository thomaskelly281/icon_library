import { mdiVectorCurve } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorCurve(props: IconComponentProps) {
  return <Icon path={mdiVectorCurve} {...props} />;
}

export { mdiVectorCurve as path };
