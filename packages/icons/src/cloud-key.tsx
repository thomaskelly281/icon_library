import { mdiCloudKey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudKey(props: IconComponentProps) {
  return <Icon path={mdiCloudKey} {...props} />;
}

export { mdiCloudKey as path };
