import { mdiVectorTriangle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorTriangle(props: IconComponentProps) {
  return <Icon path={mdiVectorTriangle} {...props} />;
}

export { mdiVectorTriangle as path };
