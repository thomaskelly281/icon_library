import { mdiTablePicnic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TablePicnic(props: IconComponentProps) {
  return <Icon path={mdiTablePicnic} {...props} />;
}

export { mdiTablePicnic as path };
