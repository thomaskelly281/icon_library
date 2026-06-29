import { mdiFileExcelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileExcelOutline(props: IconComponentProps) {
  return <Icon path={mdiFileExcelOutline} {...props} />;
}

export { mdiFileExcelOutline as path };
