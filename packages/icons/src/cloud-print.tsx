import { mdiCloudPrint } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudPrint(props: IconComponentProps) {
  return <Icon path={mdiCloudPrint} {...props} />;
}

export { mdiCloudPrint as path };
