import { mdiDataMatrixEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DataMatrixEdit(props: IconComponentProps) {
  return <Icon path={mdiDataMatrixEdit} {...props} />;
}

export { mdiDataMatrixEdit as path };
