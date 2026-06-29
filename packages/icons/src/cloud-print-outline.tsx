import { mdiCloudPrintOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudPrintOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudPrintOutline} {...props} />;
}

export { mdiCloudPrintOutline as path };
