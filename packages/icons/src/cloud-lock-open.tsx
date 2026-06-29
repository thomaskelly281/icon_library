import { mdiCloudLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudLockOpen(props: IconComponentProps) {
  return <Icon path={mdiCloudLockOpen} {...props} />;
}

export { mdiCloudLockOpen as path };
