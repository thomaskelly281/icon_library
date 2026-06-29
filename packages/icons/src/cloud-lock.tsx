import { mdiCloudLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudLock(props: IconComponentProps) {
  return <Icon path={mdiCloudLock} {...props} />;
}

export { mdiCloudLock as path };
