import { mdiVectorSquare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorSquare(props: IconComponentProps) {
  return <Icon path={mdiVectorSquare} {...props} />;
}

export { mdiVectorSquare as path };
