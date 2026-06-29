import { mdiVectorSquareEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorSquareEdit(props: IconComponentProps) {
  return <Icon path={mdiVectorSquareEdit} {...props} />;
}

export { mdiVectorSquareEdit as path };
