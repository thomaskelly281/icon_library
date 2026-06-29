import { mdiFileExcel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileExcel(props: IconComponentProps) {
  return <Icon path={mdiFileExcel} {...props} />;
}

export { mdiFileExcel as path };
