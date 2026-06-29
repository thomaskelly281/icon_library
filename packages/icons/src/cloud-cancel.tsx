import { mdiCloudCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudCancel(props: IconComponentProps) {
  return <Icon path={mdiCloudCancel} {...props} />;
}

export { mdiCloudCancel as path };
