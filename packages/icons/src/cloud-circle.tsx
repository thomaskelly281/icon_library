import { mdiCloudCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudCircle(props: IconComponentProps) {
  return <Icon path={mdiCloudCircle} {...props} />;
}

export { mdiCloudCircle as path };
