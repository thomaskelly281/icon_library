import { mdiVectorIntersection } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorIntersection(props: IconComponentProps) {
  return <Icon path={mdiVectorIntersection} {...props} />;
}

export { mdiVectorIntersection as path };
