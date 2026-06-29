import { mdiCloudLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudLockOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudLockOutline} {...props} />;
}

export { mdiCloudLockOutline as path };
