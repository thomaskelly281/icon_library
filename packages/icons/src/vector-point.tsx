import { mdiVectorPoint } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorPoint(props: IconComponentProps) {
  return <Icon path={mdiVectorPoint} {...props} />;
}

export { mdiVectorPoint as path };
