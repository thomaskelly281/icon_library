import { mdiCloudLockOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudLockOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudLockOpenOutline} {...props} />;
}

export { mdiCloudLockOpenOutline as path };
