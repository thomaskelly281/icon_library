import { mdiDataMatrixScan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DataMatrixScan(props: IconComponentProps) {
  return <Icon path={mdiDataMatrixScan} {...props} />;
}

export { mdiDataMatrixScan as path };
