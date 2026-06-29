import { mdiVectorRadius } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorRadius(props: IconComponentProps) {
  return <Icon path={mdiVectorRadius} {...props} />;
}

export { mdiVectorRadius as path };
