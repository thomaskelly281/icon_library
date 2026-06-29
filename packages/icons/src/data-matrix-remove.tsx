import { mdiDataMatrixRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DataMatrixRemove(props: IconComponentProps) {
  return <Icon path={mdiDataMatrixRemove} {...props} />;
}

export { mdiDataMatrixRemove as path };
