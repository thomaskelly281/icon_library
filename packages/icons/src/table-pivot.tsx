import { mdiTablePivot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TablePivot(props: IconComponentProps) {
  return <Icon path={mdiTablePivot} {...props} />;
}

export { mdiTablePivot as path };
