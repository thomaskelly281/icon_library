import { mdiFileExport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileExport(props: IconComponentProps) {
  return <Icon path={mdiFileExport} {...props} />;
}

export { mdiFileExport as path };
