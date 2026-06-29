import { mdiVectorPointEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorPointEdit(props: IconComponentProps) {
  return <Icon path={mdiVectorPointEdit} {...props} />;
}

export { mdiVectorPointEdit as path };
