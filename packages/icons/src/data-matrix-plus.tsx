import { mdiDataMatrixPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DataMatrixPlus(props: IconComponentProps) {
  return <Icon path={mdiDataMatrixPlus} {...props} />;
}

export { mdiDataMatrixPlus as path };
