import { mdiFileExportOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileExportOutline(props: IconComponentProps) {
  return <Icon path={mdiFileExportOutline} {...props} />;
}

export { mdiFileExportOutline as path };
