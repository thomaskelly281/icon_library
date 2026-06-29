import { mdiCloudRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudRemove(props: IconComponentProps) {
  return <Icon path={mdiCloudRemove} {...props} />;
}

export { mdiCloudRemove as path };
