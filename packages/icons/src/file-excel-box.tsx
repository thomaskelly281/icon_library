import { mdiFileExcelBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileExcelBox(props: IconComponentProps) {
  return <Icon path={mdiFileExcelBox} {...props} />;
}

export { mdiFileExcelBox as path };
