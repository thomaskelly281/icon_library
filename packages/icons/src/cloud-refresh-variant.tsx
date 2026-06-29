import { mdiCloudRefreshVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudRefreshVariant(props: IconComponentProps) {
  return <Icon path={mdiCloudRefreshVariant} {...props} />;
}

export { mdiCloudRefreshVariant as path };
