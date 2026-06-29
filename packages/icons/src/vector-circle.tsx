import { mdiVectorCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorCircle(props: IconComponentProps) {
  return <Icon path={mdiVectorCircle} {...props} />;
}

export { mdiVectorCircle as path };
