import { mdiCloudRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudRefresh(props: IconComponentProps) {
  return <Icon path={mdiCloudRefresh} {...props} />;
}

export { mdiCloudRefresh as path };
