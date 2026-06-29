import { mdiCloudSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudSync(props: IconComponentProps) {
  return <Icon path={mdiCloudSync} {...props} />;
}

export { mdiCloudSync as path };
