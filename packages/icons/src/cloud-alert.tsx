import { mdiCloudAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudAlert(props: IconComponentProps) {
  return <Icon path={mdiCloudAlert} {...props} />;
}

export { mdiCloudAlert as path };
