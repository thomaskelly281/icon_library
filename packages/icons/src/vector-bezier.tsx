import { mdiVectorBezier } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorBezier(props: IconComponentProps) {
  return <Icon path={mdiVectorBezier} {...props} />;
}

export { mdiVectorBezier as path };
